(def inc
  (fn [i]
    (+ i 1)))

(def dec
  (fn [i]
    (- i 1)))

(def first
  (fn [coll]
    (get coll 0)))

(def second
  (fn [coll]
    (get coll 1)))

(def third
  (fn [coll]
    (get coll 2)))

(def last
  (fn [coll]
    (let [cnt (.-length coll)]
      (get coll (dec cnt))
      )))

(def rest
  (fn [coll]
    (.slice coll 1)))

(def obj-to-pair
  (fn [obj]
    (loop [key (.keys Object obj)]
      [key (get obj key)]
      )))
;; (prn (obj-to-pair {:a 1 :b 2}))

(def map
  (fn [func coll]
    (if (instanceof coll Array)
      (.map coll func)
      (.map (obj-to-pair coll) func))))

(def find
  (fn [pred coll]
    (let [result []]
      (do
        (loop [el coll]
          (if (pred el)
            (.push result el)
            ))
        result)
      )))
;; (prn
;;   (find
;;     (fn [e]
;;       (prn e (= e 1))
;;       (= e 1))
;;     [1 2 3 1]
;;     ))

(def groupBy
  (fn [pred coll]
    (let [groups {}]
      (do
        (loop [el coll]
          (let [group_name (String (pred el))
                group (get groups group_name)]
            (if group
              (.push group el)
              (.defineProperty
                Object groups group_name
                {:enumerable true
                 :value [el]})
              )))
        groups
        ))))
;; (prn "groupBy"
;;      (groupBy
;;        (fn [el]
;;          (if (= 1 el)
;;            1
;;            (if (= 2 el)
;;              2
;;              0
;;              )))
;;        [1 2 3 4 5]))

(def reverse
  (fn [source]
    (.reverse (.slice source))
    ))

(def toElement
  (fn [element_coll]
    (let [element_name (first element_coll)
          element (.createElement document element_name)
          element_attributes (second element_coll)
          inner_elements (.slice element_coll 2)]
      (do
        (loop [element_attribute element_attributes]
          (let [attribute_name (first element_attribute)
                attribute_value (second element_attribute)]
            (if (not (= false attribute_value))
              (.setAttribute element attribute_name attribute_value))))

        (loop [inner_element inner_elements]
          (if (instanceof inner_element Array)
            (let [first_el (first inner_element)]
              (if (instanceof first_el Array)
                ;; Hande group in array:
                (loop [sub_inner_element inner_element]
                  (.appendChild element (toElement sub_inner_element)))
                (.appendChild element (toElement inner_element))
                ))
            (in (.-innerHTML element) (+ (.-innerHTML element) inner_element))))

        element
        ))))

(def toHtml
  (fn [element_coll]
    (.-outerHTML
      (toElement element_coll)
      )))

;; ---------------------- JS Helpers ----------------------

(def getById
  (fn [id]
    (.getElementById document id)))

(def hidden
  (fn [el]
    (.setAttribute el "hidden" "hidden")))

(def hiddenById
  (fn [id]
    (hidden (getById id))))

(def rHidden
  (fn [el]
    (.removeAttribute el "hidden")))

(def rHiddenById
  (fn [id]
    (rHidden (getById id))))

(def setHtml
  (fn [el html]
    (in (.-innerHTML el) html)))

(def isHidden
  (fn [el]
    (.hasAttribute el "hidden")))

(def create-icon
  (fn [icon_size icon_name]
    [:i {:class "material-icons not_select" :style (+ "font-size:" icon_size "px")} icon_name]))

;; ---------------------- APP ----------------------


;; Config:

(def menu_max_px_size 450)

;; TODO load from server:
(def imgs_path_prefix "/images/")

;; TODO load from server:
(def mini_img_prefix "m_")


;; Vars:

;; (def close_icon (toHtml (create-icon 26 "close")))

(def view_records_div_open (getById "id_main_menu_open"))
;; (.click view_records_div_open)

(def view_records_menu_div (getById "id_view_records_menu_div"))


(def search_div_open (getById "id_search_div_open"))

(def search_menu_div (getById "id_search_menu_div"))

(def search_div_open_icon (.-innerHTML search_div_open))

(def menu_button_div (getById "id_menu_button_div"))


;; Common FN's:

(def prepareImgPath
  (fn [img is_mini]
    (if (instanceof img Array)
      (let [img_path (get img 0)
            img_name (get img 1)
            img_ext (get img 2)]
        (if is_mini
          (+ imgs_path_prefix img_path mini_img_prefix img_name img_ext)
          (+ imgs_path_prefix img_path img_name img_ext)
          ))
      img
      )))


(def ifInputChange
  (fn [input]
    (let [form (.-form input)]
      (.setAttribute form "uuid" (generateUUID))
      )))


;; Menu code:



;; Image viewer:

(def createImgsViewerDescription
  (fn [imgs_viewer_id imgs_viewer_top_id imgs_viewer_main_img_id
       fullscreen_imgs_icon_div_id fullscreen_exit_imgs_icon_div_id
       imgs_viewer_main_img_left_id stub_imgs_viewer_main_img_left_id
       imgs_viewer_main_img_right_id stub_imgs_viewer_main_img_right_id
       imgs_viewer_bottom_id
       is_mini_mode]
    [:div {:class "imgs_viewer" :id imgs_viewer_id :hidden true}

     [:div {:class "imgs_viewer_top" :id imgs_viewer_top_id}
      [:div {:class "imgs_viewer_top_icon not_select" :id fullscreen_imgs_icon_div_id :hidden (not is_mini_mode)} (create-icon 32 "fullscreen")]
      [:div {:class "imgs_viewer_top_icon not_select" :id fullscreen_exit_imgs_icon_div_id :hidden is_mini_mode} (create-icon 32 "fullscreen_exit")]]

     [:div {:class "imgs_viewer_main_img" :id imgs_viewer_main_img_id}
      [:table {:style "height: 100%; width: 100%;"}
       [:tr {:style "height: 100%;"}

        [:td {:class "imgs_paging imgs_paging_base" :id imgs_viewer_main_img_left_id :style "text-align: left;"} (create-icon 32 "chevron_left")]
        [:td {:id stub_imgs_viewer_main_img_left_id :style "text-align: left;" :class "imgs_paging_base" :hidden true}]

        [:td {:class "imgs_paging imgs_paging_base" :id imgs_viewer_main_img_right_id :style "text-align: right;"} (create-icon 32 "chevron_right")]
        [:td {:id stub_imgs_viewer_main_img_right_id :style "text-align: right;" :class "imgs_paging_base" :hidden true}]

        ]]]

     [:div {:class "imgs_viewer_mini_imgs" :id imgs_viewer_bottom_id}]
     ]))


(def current_viewed_img_element_id null)


(def fillImgsViewer
  (fn [viewed_imgs imgs_viewer_main_img_element imgs_viewer_mini_imgs_element
       imgs_viewer_main_img_left_element stub_imgs_viewer_main_img_left_element
       imgs_viewer_main_img_right_element stub_imgs_viewer_main_img_right_element
       is_mini_mode]
    (let [imgs_elements []
          prev_viewed_img_element null]
      (loop [img viewed_imgs]
        (let [img_path (first img)
              img_name (second img)
              img_ext (third img)
              img_div (.createElement document "div")
              prev_img_element (last imgs_elements)
              id (+ "img_id_" img_name)]
          (do
            (if prev_img_element
              (do
                (in (.-next prev_img_element) img_div)
                (.push imgs_elements {:id id :div img_div :prev (.-div prev_img_element) :next null}))
              (.push imgs_elements {:id id :div img_div :prev null :next null}))

            (.setAttribute img_div "id" id)
            (.add (.-classList img_div) "img_mini_icon")

            (in (.-backgroundImage (.-style img_div)) (+ "url(" imgs_path_prefix img_path mini_img_prefix img_name img_ext ")"))

            (.appendChild imgs_viewer_mini_imgs_element img_div)

            (in
              (.-onclick img_div)
              (fn []
                (in current_viewed_img_element_id id)

                (let [element (first
                                (find
                                  (fn [e]
                                    (= (.-id e)
                                       (.-id img_div)))
                                  imgs_elements))
                      prev_img_element (.-prev element)
                      next_img_element (.-next element)]
                  (do

                    (if prev_img_element
                      (do
                        (rHidden imgs_viewer_main_img_left_element)
                        (hidden stub_imgs_viewer_main_img_left_element))
                      (do
                        (hidden imgs_viewer_main_img_left_element)
                        (rHidden stub_imgs_viewer_main_img_left_element)))

                    (if next_img_element
                      (do
                        (rHidden imgs_viewer_main_img_right_element)
                        (hidden stub_imgs_viewer_main_img_right_element))
                      (do
                        (hidden imgs_viewer_main_img_right_element)
                        (rHidden stub_imgs_viewer_main_img_right_element)))

                    (in (.-onclick imgs_viewer_main_img_left_element)
                        (fn []
                          (.scrollIntoView prev_img_element {:block "end":behavior "smooth"})
                          (.click prev_img_element)))

                    (in (.-onclick imgs_viewer_main_img_right_element)
                        (fn []
                          (.scrollIntoView next_img_element {:block "end" :behavior "smooth"})
                          (.click next_img_element)))
                    ))

                (if prev_viewed_img_element
                  (in (.-border (.-style prev_viewed_img_element)) "2px solid black"))

                (in (.-backgroundImage (.-style imgs_viewer_main_img_element)) (+ "url(" imgs_path_prefix img_path img_name img_ext ")"))

                (in (.-border (.-style img_div)) "2px solid #9E9E9E")

                (in prev_viewed_img_element img_div)

                (.scrollIntoView img_div {:block "end" :behavior "smooth"})
                ))
            img_div)
          )))))


(def openImgsViewer
  (fn [fullscreen_imgs_viewer_holder mini_imgs_viewer_holder viewed_imgs prev_imgs_div_list is_mini_mode]
    (let [genImgsViewerUUID (fn [] (+ "iv_" (generateUUID)))

          imgs_viewer_id (genImgsViewerUUID)
          imgs_viewer_top_id (genImgsViewerUUID)

          fullscreen_imgs_icon_div_id (genImgsViewerUUID)
          fullscreen_exit_imgs_icon_div_id (genImgsViewerUUID)

          imgs_viewer_main_img_id (genImgsViewerUUID)

          imgs_viewer_main_img_left_id (genImgsViewerUUID)
          stub_imgs_viewer_main_img_left_id (genImgsViewerUUID)

          imgs_viewer_main_img_right_id (genImgsViewerUUID)
          stub_imgs_viewer_main_img_right_id (genImgsViewerUUID)

          imgs_viewer_mini_imgs_id (genImgsViewerUUID)

          imgs_viewer_description (createImgsViewerDescription
                                    imgs_viewer_id imgs_viewer_top_id imgs_viewer_main_img_id
                                    fullscreen_imgs_icon_div_id fullscreen_exit_imgs_icon_div_id
                                    imgs_viewer_main_img_left_id stub_imgs_viewer_main_img_left_id
                                    imgs_viewer_main_img_right_id stub_imgs_viewer_main_img_right_id
                                    imgs_viewer_mini_imgs_id
                                    is_mini_mode)

          imgs_viewer_element (toElement imgs_viewer_description)

          _ (if is_mini_mode
              (.appendChild mini_imgs_viewer_holder imgs_viewer_element)
              (.appendChild fullscreen_imgs_viewer_holder imgs_viewer_element))

          ;; imgs_viewer_top_element (getById imgs_viewer_top_id)
          fullscreen_imgs_icon_div_element (getById fullscreen_imgs_icon_div_id)
          fullscreen_exit_imgs_icon_div_element (getById fullscreen_exit_imgs_icon_div_id)

          imgs_viewer_main_img_element (getById imgs_viewer_main_img_id)

          imgs_viewer_mini_imgs_element (getById imgs_viewer_mini_imgs_id)

          imgs_viewer_main_img_left_element (getById imgs_viewer_main_img_left_id)
          stub_imgs_viewer_main_img_left_element (getById stub_imgs_viewer_main_img_left_id)

          imgs_viewer_main_img_right_element (getById imgs_viewer_main_img_right_id)
          stub_imgs_viewer_main_img_right_element (getById stub_imgs_viewer_main_img_right_id)

          findCurrentViewedImgElement (fn [current_viewed_img_element_id imgs_div_list]
                                        (first
                                          (find
                                            (fn [img_div]
                                              (= (.-id img_div)
                                                 current_viewed_img_element_id))
                                            imgs_div_list)))]
      (let [imgs_div_list (fillImgsViewer
                            viewed_imgs imgs_viewer_main_img_element imgs_viewer_mini_imgs_element
                            imgs_viewer_main_img_left_element stub_imgs_viewer_main_img_left_element
                            imgs_viewer_main_img_right_element stub_imgs_viewer_main_img_right_element
                            is_mini_mode)
            app (getById "app")]
        (do
          (in (.-onclick fullscreen_imgs_icon_div_element)
              (fn []
                (openImgsViewer fullscreen_imgs_viewer_holder mini_imgs_viewer_holder viewed_imgs imgs_div_list false)
;;                 (hidden app)
                (rHidden fullscreen_imgs_viewer_holder)
                (in (.-backgroundColor (.-style (.-body document))) "#212121")
                ))
          (in (.-onclick fullscreen_exit_imgs_icon_div_element)
              (fn []
;;                 (rHidden app)
                (hidden imgs_viewer_element)

                ;; imgs_viewer_element can be open before scroll:
                (let [current_viewed_img_element (findCurrentViewedImgElement
                                                   current_viewed_img_element_id
                                                   prev_imgs_div_list)]
                  (.click current_viewed_img_element))

                (in (.-backgroundColor (.-style (.-body document))) "#f5f5f5")
                ))

          (rHidden imgs_viewer_element)

          (let [click_div (findCurrentViewedImgElement current_viewed_img_element_id imgs_div_list)
                click_div (if click_div click_div (first imgs_div_list))]
            (.click click_div))

          )))))


(def fullscreen_imgs_viewer_holder
  (let [fullscreen_imgs_viewer_holder "imgs_viewer_holder_id"
        fullscreen_imgs_viewer_holder (toElement [:div {:id "imgs_viewer_holder_id" :hidden true}])]
    (do
      (.appendChild (.-body document) fullscreen_imgs_viewer_holder)
      fullscreen_imgs_viewer_holder)))


;; ------------------ Select categories ------------------

(def select_categories (getById "select_categories_id"))

(def view_categories (getById "view_categories_id"))

(def view_categories_close_name (toHtml (create-icon 26 "close")))

(def view_categories_open_name (.-innerHTML view_categories))

(def current_category_search_button null)

(def current_category_tag null)


(in
  (.-onclick view_categories)
  (fn []
    (if (isHidden select_categories)
      (do
        (rHidden select_categories)
        (hidden current_category_tag)
        (setHtml view_categories view_categories_close_name))
      (do
        (rHidden current_category_tag)
        (hidden select_categories)
        (setHtml view_categories view_categories_open_name))
      )))


(def changeSearchCategory
  (fn [category_id]
    (hidden select_categories)
    (setHtml view_categories view_categories_open_name)
    (in current_category_tag (getById category_id))
    (in current_category_search_button (.querySelector current_category_tag "#search_form button"))
    (rHidden current_category_tag)
    ;; TODO ?
    (in (.-onchange (.querySelector current_category_tag "#search_form"))
        (fn [a]
          null
          ))
    ))
(changeSearchCategory "тестовый-первый-первый")


;; Map:
;; 12008
;; 53.90593625544293|27.557197561866584
(def geo_map
  (let [init_latitude 53.90593625544293 ;; 53.902223975033
        init_longitude 27.557197561866584 ;; 27.561891674995
        init_zoom_level 15 ;;12
        server_url_pattern (+ "http://" map_service_ip ":8089/styles/osm-bright/{z}/{x}/{y}.png")
        map_attribution "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>"
        geo_map (.setView (.map L "map_view" {:zoomControl false}) [init_latitude init_longitude] init_zoom_level)]
    (do
      ;; (prn map_service_ip)
      (.addTo (.tileLayer L server_url_pattern {:attribution map_attribution :minZoom 9 :maxZoom 18}) geo_map)
      (.addTo (.zoom (.-control L) {:position "bottomright"}) geo_map)
      geo_map
      )))


;; Aggregation:

(def calcZoomLevelCellSize
  (fn [zoom_level]
    (let [min_cell_size 0.000625
          min_zoom_level 18
          diff_zoom_level (- min_zoom_level zoom_level)
          current_cell_size (* (.pow Math 2 diff_zoom_level) min_cell_size)]
      current_cell_size)))


(def calcLowPoint
  (fn [lat_or_lng current_cell_size]
    (let [cell_count (.floor Math (/ lat_or_lng current_cell_size))
          cell_count (if (< lat_or_lng 0) (inc cell_count) cell_count)
          low_point (* cell_count current_cell_size)]
      {:cell_count cell_count
       :low_point low_point})))


(def calcCountOfCell
  (fn [low_point_high_cell low_point_low_cell current_cell_size]
    (let [diff (+ current_cell_size (- low_point_high_cell low_point_low_cell))
          cell_count (/ diff current_cell_size)
          less_num (.floor Math cell_count)
          fractional (- cell_count less_num)]
      ;; Remove posible remainder to big side, in floating point division:
      (if (< fractional 0.1)
        less_num
        (.ceil Math cell_count))
      )))


(def polygons [])


(def rPolygons
  (fn []
    (map
      (fn [polygon]
        (.remove polygon))
      polygons)
    (in polygons [])
    ))


(def addPolygon
  (fn [geo_map high_lat low_lng low_lat high_lng]
    (let [polygon (.polygon
                    L
                    [[high_lat low_lng]
                     [high_lat high_lng]
                     [low_lat high_lng]
                     [low_lat low_lng]]
                    {:className "polygon"}
                    )
          polygon (.addTo polygon geo_map)]
      (in
        polygons
        (.concat polygons polygon))
      )))


(def markers [])

(def prev_slices [])


(def inSlices
  (fn [marker slices]
    ;; TODO need some
    (let [is_found false]
      (do
        (loop [slice slices]
          (let [lat_lng (.getLatLng marker)
                lat (get lat_lng :lat)
                lng (get lat_lng :lng)
                coordinates (get slice :coordinates)]
            (if (and
                  (<= (first (second coordinates)) lat (first (first coordinates)))
                  (<= (second (first coordinates)) lng (second (second coordinates))))
              (in is_found true))
            ))
        is_found)
      )))


(def rAllMarkers
  (fn []
    (loop [marker markers]
      (.remove marker))
    (in markers [])))


(def rNotDisplayedMarkers
  (fn [current_slices]
    (let [preparedMarker (groupBy (fn [marker] (inSlices marker current_slices)) markers)
          removedMarkers (get preparedMarker :false)
          savedMarkers (get preparedMarker :true)]
      (do
        (if removedMarkers
          (loop [removedMarker removedMarkers]
            (.remove removedMarker)))
        (if savedMarkers
          (in markers savedMarkers)))
      )))


(def extractSlicesWhichneedUpdate
  (fn [prev_slices current_slices]
    (let [result []]
      (do
        (loop [current_slice current_slices]
          ;; TODO need some
          (let [res (first
                      (find
                        (fn [prev_slice]
                          (let [current_slice_id (get current_slice :id)
                                prev_slice_id (get prev_slice :id)]
                            (and
                              (= (first current_slice_id) (first prev_slice_id))
                              (= (second current_slice_id) (second prev_slice_id)))))
                        prev_slices))]
            (if (not res)
              (.push result current_slice))))
        result))))


(def createSlices
  (fn [geo_map]
    (do
      (let [zoom_level (.getZoom geo_map)
            map_bounds (.getBounds geo_map)

            top_left (.getNorthWest map_bounds)
            high_lat (.-lat top_left)
            low_lng (.-lng top_left)

            bottom_right (.getSouthEast map_bounds)
            low_lat (.-lat bottom_right)
            high_lng (.-lng bottom_right)

            ;; _ (addPolygon geo_map high_lat low_lng low_lat high_lng)

            current_cell_size (calcZoomLevelCellSize zoom_level)

            ;; lat_cell_size (/ current_cell_size 2)
            ;; lng_cell_size current_cell_size

            lat_cell_size current_cell_size
            lng_cell_size (* current_cell_size 2)

            lat_low_point_high_cell (calcLowPoint high_lat lat_cell_size)
            lat_low_point_low_cell (calcLowPoint low_lat lat_cell_size)

            lat_count_of_cell (calcCountOfCell
                                (get lat_low_point_high_cell :low_point)
                                (get lat_low_point_low_cell :low_point)
                                lat_cell_size)

            lng_low_point_high_cell (calcLowPoint high_lng lng_cell_size)
            lng_low_point_low_cell (calcLowPoint low_lng lng_cell_size)

            lng_count_of_cell (calcCountOfCell
                                (get lng_low_point_high_cell :low_point)
                                (get lng_low_point_low_cell :low_point)
                                lng_cell_size)

            lat_low_point_low_cell_count (get lat_low_point_low_cell :cell_count)
            lng_low_point_low_cell_count (get lng_low_point_low_cell :cell_count)
            ]
        (do
          ;; (addPolygon geo_map (+ lat_low_point_high_cell lat_cell_size) lng_low_point_low_cell lat_low_point_low_cell (+ lng_low_point_high_cell lng_cell_size))

          (loop [lat_n (range 0 lat_count_of_cell)
                 lng_n (range 0 lng_count_of_cell)]
            (let [bottom_lat (+ (get lat_low_point_low_cell :low_point) (* lat_cell_size lat_n))
                  top_lat (+ bottom_lat lat_cell_size)
                  left_lng (+ (get lng_low_point_low_cell :low_point) (* lng_cell_size lng_n))
                  right_lng (+ left_lng lng_cell_size)]
              (do
                ;; (prn [[top_lat left_lng] [bottom_lat right_lng]])
                (addPolygon geo_map top_lat left_lng bottom_lat right_lng)
                {:id [(+ lat_low_point_low_cell_count lat_n) (+ lng_low_point_low_cell_count lng_n)]
                 :coordinates [[top_lat left_lng] [bottom_lat right_lng]]}
                )))

          )))))
;; (prn (createSlices geo_map))


(def point_icon (.divIcon L {:html "<1>" :className "point-icon"}))

(def markers [])


(def createMarker
  (fn [geo_map lat_lon icon]
    (.addTo (.marker L lat_lon {:icon icon}) geo_map)
    ))


;; TODO need erase on cach size limit.
(def entries_cache [])


(def viewLastEntry
  (fn []
    (let [last_entry (last entries_cache)]
      (if last_entry
        (let [imgs (.-imgs last_entry)
              imgs (if (empty imgs) [["/" "not_found" ".png"]] imgs)

              data (.-data last_entry)
              required_filds (.-reqs data)
              not_required_filds (.-not_req data)

              view_record_content [:div {:id "id_veiw_record_div" :class "veiw_record_div"}
                                   (.concat
                                     [[:div {:id "id_img_holder" :class "img_holder"}]]
                                     (loop [required_fild required_filds]
                                       [:div {:style "margin: 10px 0px;"}
                                        [:div {:style "width: 35%;display: inline-block; font-weight:bold;"}
                                         (.-name required_fild)]
                                        [:div {:style "width: 65%;display: inline-block;"}
                                         (let [value (.-value required_fild)]
                                           (if (instanceof value Array)
                                             (.join value ", ")
                                             value))]]))]

              view_record_elment (toElement view_record_content)
              ;; _ (prn (toHtml view_record_content))

              view_record_div (getById "id_view_record_div")]
          (do
            (setHtml view_record_div "")
            (.appendChild view_record_div view_record_elment)

            (openImgsViewer fullscreen_imgs_viewer_holder (getById "id_img_holder") imgs [] true)

            (rHidden view_records_menu_div)
            ))))))


(def loadEntryData
  (fn [id marker]
    (let [xhr (new XMLHttpRequest)]
      (do
        (.addEventListener
          xhr
          "load"
          (fn [event]
            (let [entry (.parse JSON (.-responseText (.-target event)))

                  f_img (first (.-imgs entry))
                  f_img_path (if f_img
                               (prepareImgPath f_img true)
                               "/imgs/not_found.png")

                  required_filds (.-reqs (.-data entry))

                  popup_content_description [:div {:class ""}
                                             [:img {:src f_img_path :style "height:200px;" :class "point_popup_img" :onclick "viewLastEntry()"}]

                                             [:div {:class "entry_popup_fields"}
                                              (loop [required_fild required_filds]
                                                [:div {:class ""}
                                                 [:div {:class "popup_context popup_context_left"} (.-name required_fild)]
                                                 (let [value (.-value required_fild)]
                                                   [:div {:class "popup_context popup_context_right"}
                                                    (if (instanceof value Array) (.join (.-value required_fild) ", ")
                                                      (.-value required_fild))])])]

                                             [:button {:style "width: 100%;" :class "button_class not_select" :onclick "viewLastEntry()"} ;; "width: calc(100% - 40px);"
                                              [:span {:style "vertical-align: middle;"} (create-icon 16 "visibility")]
                                              " Все данные объекта"]

;;                                              [:button {:style "float: right; padding: 0px 10px" :class "button_class not_select" :onclick "viewLastEntry()"}
;;                                               [:span {:style "vertical-align: middle;"} (create-icon 16 "open_in_new")]]
                                             ]

                  ;; _ (prn popup_content_description)
                  ;; _ (prn (toHtml popup_content_description))

                  popup_content_html (toHtml popup_content_description)

                  maps_size_x (.-width screen)
                  popup_size_x (if (< maps_size_x 300) maps_size_x 300)
                  popup (.popup L {:minWidth popup_size_x})

                  popup (.setContent popup popup_content_html)]
              (do
                (.push entries_cache entry)
                (.bindPopup marker popup)
                (.openPopup marker)

                ;; (viewLastEntry)

                ))))

        (.addEventListener
          xhr
          "error"
          (fn [error]
            (prn "Error:" error)))

        (.open
          xhr
          "GET"
          (+ "/record/" id))

        (.send xhr)

        ))))


(def markerOnClickEvent
  (fn [id marker]
    (.on
      marker
      "click"
      (fn [event]
        (loadEntryData id marker)))))


(def updatePoint
  (fn [geo_map data]
    ;; aggregations
    (do
      (let [entries_info (.-points data)]
        (loop [entry_info entries_info]
          (let [lat (first entry_info)
                lon (second entry_info)
                id (get entry_info 2)
                marker (createMarker geo_map [lat lon] point_icon)]
            (do
              (markerOnClickEvent id marker)
              (.push markers marker)

              ;; (if (= "12007" id) (loadEntryData id marker))

              ))))
      (let [aggregations_info (.-centroid data)]
        (loop [aggregation_info aggregations_info]
          (let [lat (first aggregation_info)
                lon (second aggregation_info)
                cnt (get aggregation_info 2)
                agg_point (.divIcon L {:html cnt :className "agg-point-icon"})
                marker (createMarker geo_map [lat lon] agg_point)]
            (do
              (.on
                marker
                "click"
                (fn [event]
                  (let [current_zoom (.getZoom geo_map)
                        max_zoom (.getMaxZoom geo_map)
                        next_zoom (inc current_zoom)]
                    (if (< current_zoom max_zoom)
                      (.setView geo_map [lat lon] next_zoom)
                      ))))
              (.push markers marker)
              ))))
      )))


;; Search query:

(def prev_geo_map_zoom (.getZoom geo_map))

(def prev_form_uuid null)


(def formIsChanged
  (fn [prev_uuid current_uuid]
    (not (= prev_uuid current_uuid))))


(def searchQuery
  (fn [geo_map button]
    (let [search_form_element (.-form button)
          current_form_uuid (.getAttribute search_form_element "uuid")
          xhr (new XMLHttpRequest)
          fd (new FormData search_form_element)
          current_geo_map_zoom (.getZoom geo_map)]

      (let [geo_map_bounds (.getBounds geo_map)
            top_left (.getNorthWest geo_map_bounds)
            bottom_right (.getSouthEast geo_map_bounds)
            _ (rPolygons)
            current_slices (createSlices geo_map)

            need_update_slices (if (formIsChanged prev_form_uuid current_form_uuid)
                                 current_slices
                                 (extractSlicesWhichneedUpdate prev_slices current_slices))

            _ (in prev_slices current_slices)
            need_update_slices (map (fn [s] (get s :coordinates)) need_update_slices)]
        (do
          (.addEventListener
            xhr
            "load"
            (fn [event]
              (let [json_data (.parse JSON (.-responseText (.-target event)))
                    data (.-points json_data)]
                (do
                  (if (= prev_geo_map_zoom current_geo_map_zoom)
                    (rNotDisplayedMarkers current_slices)
                    (do
                      (in prev_geo_map_zoom current_geo_map_zoom)
                      (rAllMarkers)))

                  (if (formIsChanged prev_form_uuid current_form_uuid)
                    (rAllMarkers))

                  (in prev_form_uuid current_form_uuid)

                  (updatePoint geo_map data)
                  ))
              ))

          (.addEventListener
            xhr
            "error"
            (fn [error]
              (prn error)
              ))

          (if (or (< 0 (.-length need_update_slices)))
            (let [action (+ (.getAttribute search_form_element "action") "/" current_geo_map_zoom)]
              (do
                (.append fd "bounds" (.stringify JSON need_update_slices))
                (.open xhr "POST" action)
                (.send xhr fd)
                ))))
        ))))


(def query
  (fn [button]
    (searchQuery geo_map button)))


(.on
  geo_map
  "moveend"
  (fn [e]
    (.click current_category_search_button)
    ))

(.click current_category_search_button)



(prn 11)
