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

(def createIcon
  (fn [icon_size icon_name]
    [:i {:class "material-icons not_select" :style (+ "font-size:" icon_size "px")} icon_name]))






