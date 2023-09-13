(def newSocket
  (fn []
    (new
      WebSocket
      (+ "wss://"
         (.-hostname (.-location window))
         "/api/ws"))))


;; TODO Prevent FF(mobile) bug when after page open, first location select, spawn open new location hists div.
;; And posible any other hints opening, when some ws message accept with latency.
;; Need try for first request, when input not changed but set on server:
(def location_input_changed true)


(def socketOnMessage
  (fn [event]
    (let [data (.-data event)
          addresses (.parse JSON data)
          input_value (.-value search_location)]
      (do
        (if (and location_input_changed (not (empty input_value)))
          (do
            (in (.-innerHTML id_address_hints_div) "")
            (.appendChild
              id_address_hints_div
              (toElement
                (.concat
                  [:div {}]
                  (loop [addres addresses]
                    [:div {:class "founded_address"
                           :onclick (+ "on_address_select('" (.-city addres) ", " (.-state addres) "','" (.stringify JSON addres) "')")}
                     (+ (.-city addres) ", " (.-state addres))]))))
            (.removeAttribute id_address_hints_div "hidden")))
        ))))


(def socketOnClosed
  (fn []
    (in socket (newSocket))
    (in (.-onmessage socket) socketOnMessage)
    (in (.-onclose socket) socketOnClosed)
    ))


(def checkSocketOnClosed
  (fn []
    (if (not (or (= (.-readyState socket) 0)
                 (= (.-readyState socket) 1)))
      (socketOnClosed))
    (setTimeout checkSocketOnClosed 1000)
    ))


(def socket
  (newSocket))


(in (.-onmessage socket) socketOnMessage)
(checkSocketOnClosed)


(def search_location_is_focused false)


(def on_address_select
  (fn [txt_addres json_addres]
    (in location_input_changed false)

    (in (.-innerText address_hints_view_div) txt_addres)
    (rHidden address_hints_view_div)
    (hidden search_location)
    (hidden id_address_hints_div)
    (in search_location_is_focused false)

    (in (.-value id_job_location) json_addres)
    ))


(def sendLocationForHint
  (fn []
    (let [value (.-value search_location)]
      (do
        (if (not (empty value))
          (.send socket value)
          (do
            (in (.-value id_job_location) "")
            (.setAttribute id_address_hints_div "hidden" "hidden"))
          )))))


(in (.-onclick address_hints_view_div)
    (fn []
      (sendLocationForHint)
      (hidden address_hints_view_div)
      (rHidden search_location)
      (rHidden id_address_hints_div)
      (in search_location_is_focused true)
      (.focus search_location)
      ))


(.addEventListener
  search_location
  "input"
  (fn [event]
    (in location_input_changed true)
    (sendLocationForHint)))


;; (in
;;   (.-onblur search_location)
;;   (fn []
;;     (.setAttribute id_address_hints_div "hidden" "hidden")
;;     (in search_location_is_focused false)
;;     ))

;; (in
;;   (.-onfocus search_location)
;;   (fn []
;;     ;; (sendLocationForHint)
;;     (.removeAttribute id_address_hints_div "hidden")
;;     (in search_location_is_focused true)
;;     ))


(.addEventListener
  document
  "keypress"
  (fn [event]
    (let [pressed_key (.-key event)]
      (if (and (= "Escape" pressed_key) search_location_is_focused)
        (do
          (.blur search_location)
          ;; (.setAttribute id_address_hints_div "hidden" "hidden")
          ;; (prn pressed_key (.hasFocus document))
          )
        ))))

