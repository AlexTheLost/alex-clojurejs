var inc = function(i) {
  return (i + 1);
};

var dec = function(i) {
  return (i - 1);
};

var first = function(coll) {
  return coll[0];
};

var second = function(coll) {
  return coll[1];
};

var third = function(coll) {
  return coll[2];
};

var last = function(coll) {
  return (function() {
    var cnt = coll.length;
    return coll[dec(cnt)]
  })();
};

var rest = function(coll) {
  return coll.slice(1);
};

var obj_to_pair = function(obj) {
  return (function() {
    var seq_key = Object.keys(obj);
    var loop_result963aa21a_7098_4412_7c76_f86c5056d81a = [];
    if (!(seq_key instanceof Array)) {
      seq_key = Object.entries(seq_key);
    }
    for (var idx0 = 0; idx0 < seq_key.length; idx0++) {
      var key = seq_key[idx0];
      loop_result963aa21a_7098_4412_7c76_f86c5056d81a.push([key, obj[key]]);
    }
    return loop_result963aa21a_7098_4412_7c76_f86c5056d81a;
  })();
};

var map = function(func, coll) {
  return (function() {
    if ((coll instanceof Array)) {
      return coll.map(func);
    } else {
      return obj_to_pair(coll).map(func);
    }
  })();
};

var find = function(pred, coll) {
  return (function() {
    var result = [];
    return (function() {
      (function() {
        var seq_el = coll;
        var loop_result3ba60874_38b8_b87b_df9a_040764f0bdcd = [];
        if (!(seq_el instanceof Array)) {
          seq_el = Object.entries(seq_el);
        }
        for (var idx0 = 0; idx0 < seq_el.length; idx0++) {
          var el = seq_el[idx0];
          loop_result3ba60874_38b8_b87b_df9a_040764f0bdcd.push((function() {
            if (pred(el)) {
              return result.push(el);
            }
          })());
        }
        return loop_result3ba60874_38b8_b87b_df9a_040764f0bdcd;
      })();
      return result
    })()
  })();
};

var groupBy = function(pred, coll) {
  return (function() {
    var groups = (function() {
      var new_obj = {}
      return new_obj;
    })();
    return (function() {
      (function() {
        var seq_el = coll;
        var loop_result34e3d716_a46e_0b9d_fa4c_75a42fe77fdf = [];
        if (!(seq_el instanceof Array)) {
          seq_el = Object.entries(seq_el);
        }
        for (var idx0 = 0; idx0 < seq_el.length; idx0++) {
          var el = seq_el[idx0];
          loop_result34e3d716_a46e_0b9d_fa4c_75a42fe77fdf.push((function() {
            var group_name = String(pred(el));
            var group = groups[group_name];
            return (function() {
              if (group) {
                return group.push(el);
              } else {
                return Object.defineProperty(groups, group_name, (function() {
                  var new_obj = {
                    enumerable: true,
                    value: [el],
                  }
                  return new_obj;
                })());
              }
            })()
          })());
        }
        return loop_result34e3d716_a46e_0b9d_fa4c_75a42fe77fdf;
      })();
      return groups
    })()
  })();
};

var reverse = function(source) {
  return source.slice().reverse();
};

var toElement = function(element_coll) {
  return (function() {
    var element_name = first(element_coll);
    var element = document.createElement(element_name);
    var element_attributes = second(element_coll);
    var inner_elements = element_coll.slice(2);
    return (function() {
      (function() {
        var seq_element_attribute = element_attributes;
        var loop_resultb245a75e_5713_f3d5_3dc0_0090add60956 = [];
        if (!(seq_element_attribute instanceof Array)) {
          seq_element_attribute = Object.entries(seq_element_attribute);
        }
        for (var idx0 = 0; idx0 < seq_element_attribute.length; idx0++) {
          var element_attribute = seq_element_attribute[idx0];
          loop_resultb245a75e_5713_f3d5_3dc0_0090add60956.push((function() {
            var attribute_name = first(element_attribute);
            var attribute_value = second(element_attribute);
            return (function() {
              if (!(false === attribute_value)) {
                return element.setAttribute(attribute_name, attribute_value);
              }
            })()
          })());
        }
        return loop_resultb245a75e_5713_f3d5_3dc0_0090add60956;
      })();
      (function() {
        var seq_inner_element = inner_elements;
        var loop_result946cfda2_031d_b59b_cf5f_4a713d271610 = [];
        if (!(seq_inner_element instanceof Array)) {
          seq_inner_element = Object.entries(seq_inner_element);
        }
        for (var idx0 = 0; idx0 < seq_inner_element.length; idx0++) {
          var inner_element = seq_inner_element[idx0];
          loop_result946cfda2_031d_b59b_cf5f_4a713d271610.push((function() {
            if ((inner_element instanceof Array)) {
              return (function() {
                var first_el = first(inner_element);
                return (function() {
                  if ((first_el instanceof Array)) {
                    return (function() {
                      var seq_sub_inner_element = inner_element;
                      var loop_resultf5770f68_2e2f_48bd_5268_1267290094be = [];
                      if (!(seq_sub_inner_element instanceof Array)) {
                        seq_sub_inner_element = Object.entries(seq_sub_inner_element);
                      }
                      for (var idx0 = 0; idx0 < seq_sub_inner_element.length; idx0++) {
                        var sub_inner_element = seq_sub_inner_element[idx0];
                        loop_resultf5770f68_2e2f_48bd_5268_1267290094be.push(element.appendChild(toElement(sub_inner_element)));
                      }
                      return loop_resultf5770f68_2e2f_48bd_5268_1267290094be;
                    })();
                  } else {
                    return element.appendChild(toElement(inner_element));
                  }
                })()
              })()

              ;
            } else {
              return element.innerHTML = (element.innerHTML + inner_element);
            }
          })());
        }
        return loop_result946cfda2_031d_b59b_cf5f_4a713d271610;
      })();
      return element
    })()
  })();
};

var toHtml = function(element_coll) {
  return toElement(element_coll).outerHTML;
};

var getById = function(id) {
  return document.getElementById(id);
};

var hidden = function(el) {
  return el.setAttribute("hidden", "hidden");
};

var hiddenById = function(id) {
  return hidden(getById(id));
};

var rHidden = function(el) {
  return el.removeAttribute("hidden");
};

var rHiddenById = function(id) {
  return rHidden(getById(id));
};

var setHtml = function(el, html) {
  return el.innerHTML = html;
};

var isHidden = function(el) {
  return el.hasAttribute("hidden");
};

var create_icon = function(icon_size, icon_name) {
  return ['i', (function() {
    var new_obj = {
      class: "material-icons not_select",
      style: ("font-size:" + icon_size + "px"),
    }
    return new_obj;
  })(), icon_name];
};

var menu_max_px_size = 450;

var imgs_path_prefix = "/images/";

var mini_img_prefix = "m_";

var view_records_div_open = getById("id_main_menu_open");

var view_records_menu_div = getById("id_view_records_menu_div");

var search_div_open = getById("id_search_div_open");

var search_menu_div = getById("id_search_menu_div");

var search_div_open_icon = search_div_open.innerHTML;

var menu_button_div = getById("id_menu_button_div");

var prepareImgPath = function(img, is_mini) {
  return (function() {
    if ((img instanceof Array)) {
      return (function() {
        var img_path = img[0];
        var img_name = img[1];
        var img_ext = img[2];
        return (function() {
          if (is_mini) {
            return (imgs_path_prefix + img_path + mini_img_prefix + img_name + img_ext);
          } else {
            return (imgs_path_prefix + img_path + img_name + img_ext);
          }
        })()
      })()

      ;
    } else {
      return img;
    }
  })();
};

var ifInputChange = function(input) {
  return (function() {
    var form = input.form;
    return form.setAttribute("uuid", generateUUID())
  })();
};

var createImgsViewerDescription = function(imgs_viewer_id, imgs_viewer_top_id, imgs_viewer_main_img_id, fullscreen_imgs_icon_div_id, fullscreen_exit_imgs_icon_div_id, imgs_viewer_main_img_left_id, stub_imgs_viewer_main_img_left_id, imgs_viewer_main_img_right_id, stub_imgs_viewer_main_img_right_id, imgs_viewer_bottom_id, is_mini_mode) {
  return ['div', (function() {
      var new_obj = {
        class: "imgs_viewer",
        id: imgs_viewer_id,
        hidden: true,
      }
      return new_obj;
    })(), ['div', (function() {
        var new_obj = {
          class: "imgs_viewer_top",
          id: imgs_viewer_top_id,
        }
        return new_obj;
      })(), ['div', (function() {
        var new_obj = {
          class: "imgs_viewer_top_icon not_select",
          id: fullscreen_imgs_icon_div_id,
          hidden: !is_mini_mode,
        }
        return new_obj;
      })(), create_icon(32, "fullscreen")],
      ['div', (function() {
        var new_obj = {
          class: "imgs_viewer_top_icon not_select",
          id: fullscreen_exit_imgs_icon_div_id,
          hidden: is_mini_mode,
        }
        return new_obj;
      })(), create_icon(32, "fullscreen_exit")]
    ],
    ['div', (function() {
      var new_obj = {
        class: "imgs_viewer_main_img",
        id: imgs_viewer_main_img_id,
      }
      return new_obj;
    })(), ['table', (function() {
      var new_obj = {
        style: "height: 100%; width: 100%;",
      }
      return new_obj;
    })(), ['tr', (function() {
        var new_obj = {
          style: "height: 100%;",
        }
        return new_obj;
      })(), ['td', (function() {
        var new_obj = {
          class: "imgs_paging imgs_paging_base",
          id: imgs_viewer_main_img_left_id,
          style: "text-align: left;",
        }
        return new_obj;
      })(), create_icon(32, "chevron_left")],
      ['td', (function() {
        var new_obj = {
          id: stub_imgs_viewer_main_img_left_id,
          style: "text-align: left;",
          class: "imgs_paging_base",
          hidden: true,
        }
        return new_obj;
      })()],
      ['td', (function() {
        var new_obj = {
          class: "imgs_paging imgs_paging_base",
          id: imgs_viewer_main_img_right_id,
          style: "text-align: right;",
        }
        return new_obj;
      })(), create_icon(32, "chevron_right")],
      ['td', (function() {
        var new_obj = {
          id: stub_imgs_viewer_main_img_right_id,
          style: "text-align: right;",
          class: "imgs_paging_base",
          hidden: true,
        }
        return new_obj;
      })()]
    ]]],
    ['div', (function() {
      var new_obj = {
        class: "imgs_viewer_mini_imgs",
        id: imgs_viewer_bottom_id,
      }
      return new_obj;
    })()]
  ];
};

var current_viewed_img_element_id = null;

var fillImgsViewer = function(viewed_imgs, imgs_viewer_main_img_element, imgs_viewer_mini_imgs_element, imgs_viewer_main_img_left_element, stub_imgs_viewer_main_img_left_element, imgs_viewer_main_img_right_element, stub_imgs_viewer_main_img_right_element, is_mini_mode) {
  return (function() {
    var imgs_elements = [];
    var prev_viewed_img_element = null;
    return (function() {
      var seq_img = viewed_imgs;
      var loop_result27e21f16_14bf_d838_749a_ae79d3eca576 = [];
      if (!(seq_img instanceof Array)) {
        seq_img = Object.entries(seq_img);
      }
      for (var idx0 = 0; idx0 < seq_img.length; idx0++) {
        var img = seq_img[idx0];
        loop_result27e21f16_14bf_d838_749a_ae79d3eca576.push((function() {
          var img_path = first(img);
          var img_name = second(img);
          var img_ext = third(img);
          var img_div = document.createElement("div");
          var prev_img_element = last(imgs_elements);
          var id = ("img_id_" + img_name);
          return (function() {
            (function() {
              if (prev_img_element) {
                return (function() {
                  prev_img_element.next = img_div;
                  return imgs_elements.push((function() {
                    var new_obj = {
                      id: id,
                      div: img_div,
                      prev: prev_img_element.div,
                      next: null,
                    }
                    return new_obj;
                  })())
                })();
              } else {
                return imgs_elements.push((function() {
                  var new_obj = {
                    id: id,
                    div: img_div,
                    prev: null,
                    next: null,
                  }
                  return new_obj;
                })());
              }
            })();
            img_div.setAttribute("id", id);
            img_div.classList.add("img_mini_icon");
            img_div.style.backgroundImage = ("url(" + imgs_path_prefix + img_path + mini_img_prefix + img_name + img_ext + ")");
            imgs_viewer_mini_imgs_element.appendChild(img_div);
            img_div.onclick = function() {
              current_viewed_img_element_id = id;
              (function() {
                var element = first(find(function(e) {
                  return (e.id === img_div.id);
                }, imgs_elements));
                var prev_img_element = element.prev;
                var next_img_element = element.next;
                return (function() {
                  (function() {
                    if (prev_img_element) {
                      return (function() {
                        rHidden(imgs_viewer_main_img_left_element);
                        return hidden(stub_imgs_viewer_main_img_left_element)
                      })();
                    } else {
                      return (function() {
                        hidden(imgs_viewer_main_img_left_element);
                        return rHidden(stub_imgs_viewer_main_img_left_element)
                      })();
                    }
                  })();
                  (function() {
                    if (next_img_element) {
                      return (function() {
                        rHidden(imgs_viewer_main_img_right_element);
                        return hidden(stub_imgs_viewer_main_img_right_element)
                      })();
                    } else {
                      return (function() {
                        hidden(imgs_viewer_main_img_right_element);
                        return rHidden(stub_imgs_viewer_main_img_right_element)
                      })();
                    }
                  })();
                  imgs_viewer_main_img_left_element.onclick = function() {
                    prev_img_element.scrollIntoView((function() {
                      var new_obj = {
                        block: "end",
                        behavior: "smooth",
                      }
                      return new_obj;
                    })());
                    return prev_img_element.click();
                  };
                  return imgs_viewer_main_img_right_element.onclick = function() {
                    next_img_element.scrollIntoView((function() {
                      var new_obj = {
                        block: "end",
                        behavior: "smooth",
                      }
                      return new_obj;
                    })());
                    return next_img_element.click();
                  }
                })()
              })();
              (function() {
                if (prev_viewed_img_element) {
                  return prev_viewed_img_element.style.border = "2px solid black";
                }
              })();
              imgs_viewer_main_img_element.style.backgroundImage = ("url(" + imgs_path_prefix + img_path + img_name + img_ext + ")");
              img_div.style.border = "2px solid #9E9E9E";
              prev_viewed_img_element = img_div;
              return img_div.scrollIntoView((function() {
                var new_obj = {
                  block: "end",
                  behavior: "smooth",
                }
                return new_obj;
              })());
            };
            return img_div
          })()
        })());
      }
      return loop_result27e21f16_14bf_d838_749a_ae79d3eca576;
    })()
  })();
};

var openImgsViewer = function(fullscreen_imgs_viewer_holder, mini_imgs_viewer_holder, viewed_imgs, prev_imgs_div_list, is_mini_mode) {
  return (function() {
    var genImgsViewerUUID = function() {
      return ("iv_" + generateUUID());
    };
    var imgs_viewer_id = genImgsViewerUUID();
    var imgs_viewer_top_id = genImgsViewerUUID();
    var fullscreen_imgs_icon_div_id = genImgsViewerUUID();
    var fullscreen_exit_imgs_icon_div_id = genImgsViewerUUID();
    var imgs_viewer_main_img_id = genImgsViewerUUID();
    var imgs_viewer_main_img_left_id = genImgsViewerUUID();
    var stub_imgs_viewer_main_img_left_id = genImgsViewerUUID();
    var imgs_viewer_main_img_right_id = genImgsViewerUUID();
    var stub_imgs_viewer_main_img_right_id = genImgsViewerUUID();
    var imgs_viewer_mini_imgs_id = genImgsViewerUUID();
    var imgs_viewer_description = createImgsViewerDescription(imgs_viewer_id, imgs_viewer_top_id, imgs_viewer_main_img_id, fullscreen_imgs_icon_div_id, fullscreen_exit_imgs_icon_div_id, imgs_viewer_main_img_left_id, stub_imgs_viewer_main_img_left_id, imgs_viewer_main_img_right_id, stub_imgs_viewer_main_img_right_id, imgs_viewer_mini_imgs_id, is_mini_mode);
    var imgs_viewer_element = toElement(imgs_viewer_description);
    (function() {
      if (is_mini_mode) {
        return mini_imgs_viewer_holder.appendChild(imgs_viewer_element);
      } else {
        return fullscreen_imgs_viewer_holder.appendChild(imgs_viewer_element);
      }
    })();
    var fullscreen_imgs_icon_div_element = getById(fullscreen_imgs_icon_div_id);
    var fullscreen_exit_imgs_icon_div_element = getById(fullscreen_exit_imgs_icon_div_id);
    var imgs_viewer_main_img_element = getById(imgs_viewer_main_img_id);
    var imgs_viewer_mini_imgs_element = getById(imgs_viewer_mini_imgs_id);
    var imgs_viewer_main_img_left_element = getById(imgs_viewer_main_img_left_id);
    var stub_imgs_viewer_main_img_left_element = getById(stub_imgs_viewer_main_img_left_id);
    var imgs_viewer_main_img_right_element = getById(imgs_viewer_main_img_right_id);
    var stub_imgs_viewer_main_img_right_element = getById(stub_imgs_viewer_main_img_right_id);
    var findCurrentViewedImgElement = function(current_viewed_img_element_id, imgs_div_list) {
      return first(find(function(img_div) {
        return (img_div.id === current_viewed_img_element_id);
      }, imgs_div_list));
    };
    return (function() {
      var imgs_div_list = fillImgsViewer(viewed_imgs, imgs_viewer_main_img_element, imgs_viewer_mini_imgs_element, imgs_viewer_main_img_left_element, stub_imgs_viewer_main_img_left_element, imgs_viewer_main_img_right_element, stub_imgs_viewer_main_img_right_element, is_mini_mode);
      var app = getById("app");
      return (function() {
        fullscreen_imgs_icon_div_element.onclick = function() {
          openImgsViewer(fullscreen_imgs_viewer_holder, mini_imgs_viewer_holder, viewed_imgs, imgs_div_list, false);
          rHidden(fullscreen_imgs_viewer_holder);
          return document.body.style.backgroundColor = "#212121";
        };
        fullscreen_exit_imgs_icon_div_element.onclick = function() {
          hidden(imgs_viewer_element);
          (function() {
            var current_viewed_img_element = findCurrentViewedImgElement(current_viewed_img_element_id, prev_imgs_div_list);
            return current_viewed_img_element.click()
          })();
          return document.body.style.backgroundColor = "#f5f5f5";
        };
        rHidden(imgs_viewer_element);
        return (function() {
          var click_div = findCurrentViewedImgElement(current_viewed_img_element_id, imgs_div_list);
          var click_div = (function() {
            if (click_div) {
              return click_div;
            } else {
              return first(imgs_div_list);
            }
          })();
          return click_div.click()
        })()

      })()
    })()
  })();
};

var fullscreen_imgs_viewer_holder = (function() {
  var fullscreen_imgs_viewer_holder = "imgs_viewer_holder_id";
  var fullscreen_imgs_viewer_holder = toElement(['div', (function() {
    var new_obj = {
      id: "imgs_viewer_holder_id",
      hidden: true,
    }
    return new_obj;
  })()]);
  return (function() {
    document.body.appendChild(fullscreen_imgs_viewer_holder);
    return fullscreen_imgs_viewer_holder
  })()
})();

var select_categories = getById("select_categories_id");

var view_categories = getById("view_categories_id");

var view_categories_close_name = toHtml(create_icon(26, "close"));

var view_categories_open_name = view_categories.innerHTML;

var current_category_search_button = null;

var current_category_tag = null;

view_categories.onclick = function() {
  return (function() {
    if (isHidden(select_categories)) {
      return (function() {
        rHidden(select_categories);
        hidden(current_category_tag);
        return setHtml(view_categories, view_categories_close_name)
      })();
    } else {
      return (function() {
        rHidden(current_category_tag);
        hidden(select_categories);
        return setHtml(view_categories, view_categories_open_name)
      })();
    }
  })();
};

var changeSearchCategory = function(category_id) {
  hidden(select_categories);
  setHtml(view_categories, view_categories_open_name);
  current_category_tag = getById(category_id);
  current_category_search_button = current_category_tag.querySelector("#search_form button");
  rHidden(current_category_tag);
  return current_category_tag.querySelector("#search_form").onchange = function(a) {
    return null;
  };
};

changeSearchCategory("тестовый-первый-первый");

var geo_map = (function() {
  var init_latitude = 53.90593625544293;
  var init_longitude = 27.557197561866584;
  var init_zoom_level = 15;
  var server_url_pattern = ("http://" + map_service_ip + ":8089/styles/osm-bright/{z}/{x}/{y}.png");
  var map_attribution = "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>";
  var geo_map = L.map("map_view", (function() {
    var new_obj = {
      zoomControl: false,
    }
    return new_obj;
  })()).setView([init_latitude, init_longitude], init_zoom_level);
  return (function() {
    L.tileLayer(server_url_pattern, (function() {
      var new_obj = {
        attribution: map_attribution,
        minZoom: 9,
        maxZoom: 18,
      }
      return new_obj;
    })()).addTo(geo_map);
    L.control.zoom((function() {
      var new_obj = {
        position: "bottomright",
      }
      return new_obj;
    })()).addTo(geo_map);
    return geo_map
  })()
})();

var calcZoomLevelCellSize = function(zoom_level) {
  return (function() {
    var min_cell_size = 0.000625;
    var min_zoom_level = 18;
    var diff_zoom_level = (min_zoom_level - zoom_level);
    var current_cell_size = (Math.pow(2, diff_zoom_level) * min_cell_size);
    return current_cell_size
  })();
};

var calcLowPoint = function(lat_or_lng, current_cell_size) {
  return (function() {
    var cell_count = Math.floor((lat_or_lng / current_cell_size));
    var cell_count = (function() {
      if ((lat_or_lng < 0)) {
        return inc(cell_count);
      } else {
        return cell_count;
      }
    })();
    var low_point = (cell_count * current_cell_size);
    return (function() {
      var new_obj = {
        cell_count: cell_count,
        low_point: low_point,
      }
      return new_obj;
    })()
  })();
};

var calcCountOfCell = function(low_point_high_cell, low_point_low_cell, current_cell_size) {
  return (function() {
    var diff = (current_cell_size + (low_point_high_cell - low_point_low_cell));
    var cell_count = (diff / current_cell_size);
    var less_num = Math.floor(cell_count);
    var fractional = (cell_count - less_num);
    return (function() {
      if ((fractional < 0.1)) {
        return less_num;
      } else {
        return Math.ceil(cell_count);
      }
    })()
  })();
};

var polygons = [];

var rPolygons = function() {
  map(function(polygon) {
    return polygon.remove();
  }, polygons);
  return polygons = [];
};

var addPolygon = function(geo_map, high_lat, low_lng, low_lat, high_lng) {
  return (function() {
    var polygon = L.polygon([
      [high_lat, low_lng],
      [high_lat, high_lng],
      [low_lat, high_lng],
      [low_lat, low_lng]
    ], (function() {
      var new_obj = {
        className: "polygon",
      }
      return new_obj;
    })());
    var polygon = polygon.addTo(geo_map);
    return polygons = polygons.concat(polygon)
  })();
};

var markers = [];

var prev_slices = [];

var inSlices = function(marker, slices) {
  return (function() {
    var is_found = false;
    return (function() {
      (function() {
        var seq_slice = slices;
        var loop_resultc3895046_76d8_57f6_950e_fc9c7e022b2d = [];
        if (!(seq_slice instanceof Array)) {
          seq_slice = Object.entries(seq_slice);
        }
        for (var idx0 = 0; idx0 < seq_slice.length; idx0++) {
          var slice = seq_slice[idx0];
          loop_resultc3895046_76d8_57f6_950e_fc9c7e022b2d.push((function() {
            var lat_lng = marker.getLatLng();
            var lat = lat_lng['lat'];
            var lng = lat_lng['lng'];
            var coordinates = slice['coordinates'];
            return (function() {
              if ((((first(second(coordinates)) <= lat) && (lat <= first(first(coordinates)))) && ((second(first(coordinates)) <= lng) && (lng <= second(second(coordinates)))))) {
                return is_found = true;
              }
            })()
          })());
        }
        return loop_resultc3895046_76d8_57f6_950e_fc9c7e022b2d;
      })();
      return is_found
    })()
  })();
};

var rAllMarkers = function() {
  (function() {
    var seq_marker = markers;
    var loop_resultc0f09b97_9cd1_a432_08ec_e8dbf23a9d78 = [];
    if (!(seq_marker instanceof Array)) {
      seq_marker = Object.entries(seq_marker);
    }
    for (var idx0 = 0; idx0 < seq_marker.length; idx0++) {
      var marker = seq_marker[idx0];
      loop_resultc0f09b97_9cd1_a432_08ec_e8dbf23a9d78.push(marker.remove());
    }
    return loop_resultc0f09b97_9cd1_a432_08ec_e8dbf23a9d78;
  })();
  return markers = [];
};

var rNotDisplayedMarkers = function(current_slices) {
  return (function() {
    var preparedMarker = groupBy(function(marker) {
      return inSlices(marker, current_slices);
    }, markers);
    var removedMarkers = preparedMarker['false'];
    var savedMarkers = preparedMarker['true'];
    return (function() {
      (function() {
        if (removedMarkers) {
          return (function() {
            var seq_removedMarker = removedMarkers;
            var loop_resultb074e11d_912f_5b96_3625_9e893ec92a5f = [];
            if (!(seq_removedMarker instanceof Array)) {
              seq_removedMarker = Object.entries(seq_removedMarker);
            }
            for (var idx0 = 0; idx0 < seq_removedMarker.length; idx0++) {
              var removedMarker = seq_removedMarker[idx0];
              loop_resultb074e11d_912f_5b96_3625_9e893ec92a5f.push(removedMarker.remove());
            }
            return loop_resultb074e11d_912f_5b96_3625_9e893ec92a5f;
          })();
        }
      })();
      return (function() {
        if (savedMarkers) {
          return markers = savedMarkers;
        }
      })()
    })()
  })();
};

var extractSlicesWhichneedUpdate = function(prev_slices, current_slices) {
  return (function() {
    var result = [];
    return (function() {
      (function() {
        var seq_current_slice = current_slices;
        var loop_result5659d47a_321b_7602_4d75_3906b992b89d = [];
        if (!(seq_current_slice instanceof Array)) {
          seq_current_slice = Object.entries(seq_current_slice);
        }
        for (var idx0 = 0; idx0 < seq_current_slice.length; idx0++) {
          var current_slice = seq_current_slice[idx0];
          loop_result5659d47a_321b_7602_4d75_3906b992b89d.push((function() {
            var res = first(find(function(prev_slice) {
              return (function() {
                var current_slice_id = current_slice['id'];
                var prev_slice_id = prev_slice['id'];
                return ((first(current_slice_id) === first(prev_slice_id)) && (second(current_slice_id) === second(prev_slice_id)))
              })();
            }, prev_slices));
            return (function() {
              if (!res) {
                return result.push(current_slice);
              }
            })()
          })());
        }
        return loop_result5659d47a_321b_7602_4d75_3906b992b89d;
      })();
      return result
    })()
  })();
};

var createSlices = function(geo_map) {
  return (function() {
    return (function() {
      var zoom_level = geo_map.getZoom();
      var map_bounds = geo_map.getBounds();
      var top_left = map_bounds.getNorthWest();
      var high_lat = top_left.lat;
      var low_lng = top_left.lng;
      var bottom_right = map_bounds.getSouthEast();
      var low_lat = bottom_right.lat;
      var high_lng = bottom_right.lng;
      var current_cell_size = calcZoomLevelCellSize(zoom_level);
      var lat_cell_size = current_cell_size;
      var lng_cell_size = (current_cell_size * 2);
      var lat_low_point_high_cell = calcLowPoint(high_lat, lat_cell_size);
      var lat_low_point_low_cell = calcLowPoint(low_lat, lat_cell_size);
      var lat_count_of_cell = calcCountOfCell(lat_low_point_high_cell['low_point'], lat_low_point_low_cell['low_point'], lat_cell_size);
      var lng_low_point_high_cell = calcLowPoint(high_lng, lng_cell_size);
      var lng_low_point_low_cell = calcLowPoint(low_lng, lng_cell_size);
      var lng_count_of_cell = calcCountOfCell(lng_low_point_high_cell['low_point'], lng_low_point_low_cell['low_point'], lng_cell_size);
      var lat_low_point_low_cell_count = lat_low_point_low_cell['cell_count'];
      var lng_low_point_low_cell_count = lng_low_point_low_cell['cell_count'];
      return (function() {
        return (function() {
          var seq_lat_n = range(0, lat_count_of_cell);
          var seq_lng_n = range(0, lng_count_of_cell);
          var loop_resultd9cfc786_6db7_bb1b_a839_3ef861442a28 = [];
          if (!(seq_lat_n instanceof Array)) {
            seq_lat_n = Object.entries(seq_lat_n);
          }
          for (var idx0 = 0; idx0 < seq_lat_n.length; idx0++) {
            var lat_n = seq_lat_n[idx0];
            if (!(seq_lng_n instanceof Array)) {
              seq_lng_n = Object.entries(seq_lng_n);
            }
            for (var idx1 = 0; idx1 < seq_lng_n.length; idx1++) {
              var lng_n = seq_lng_n[idx1];
              loop_resultd9cfc786_6db7_bb1b_a839_3ef861442a28.push((function() {
                var bottom_lat = (lat_low_point_low_cell['low_point'] + (lat_cell_size * lat_n));
                var top_lat = (bottom_lat + lat_cell_size);
                var left_lng = (lng_low_point_low_cell['low_point'] + (lng_cell_size * lng_n));
                var right_lng = (left_lng + lng_cell_size);
                return (function() {
                  addPolygon(geo_map, top_lat, left_lng, bottom_lat, right_lng);
                  return (function() {
                    var new_obj = {
                      id: [(lat_low_point_low_cell_count + lat_n), (lng_low_point_low_cell_count + lng_n)],
                      coordinates: [
                        [top_lat, left_lng],
                        [bottom_lat, right_lng]
                      ],
                    }
                    return new_obj;
                  })()
                })()
              })());
            }
          }
          return loop_resultd9cfc786_6db7_bb1b_a839_3ef861442a28;
        })()
      })()
    })()

  })();
};

var point_icon = L.divIcon((function() {
  var new_obj = {
    html: "<1>",
    className: "point-icon",
  }
  return new_obj;
})());

var markers = [];

var createMarker = function(geo_map, lat_lon, icon) {
  return L.marker(lat_lon, (function() {
    var new_obj = {
      icon: icon,
    }
    return new_obj;
  })()).addTo(geo_map);
};

var entries_cache = [];

var viewLastEntry = function() {
  return (function() {
    var last_entry = last(entries_cache);
    return (function() {
      if (last_entry) {
        return (function() {
          var imgs = last_entry.imgs;
          var imgs = (function() {
            if (empty(imgs)) {
              return [
                ["/", "not_found", ".png"]
              ];
            } else {
              return imgs;
            }
          })();
          var data = last_entry.data;
          var required_filds = data.reqs;
          var not_required_filds = data.not_req;
          var view_record_content = ['div', (function() {
            var new_obj = {
              id: "id_veiw_record_div",
              class: "veiw_record_div",
            }
            return new_obj;
          })(), [
            ['div', (function() {
              var new_obj = {
                id: "id_img_holder",
                class: "img_holder",
              }
              return new_obj;
            })()]
          ].concat((function() {
            var seq_required_fild = required_filds;
            var loop_resultd6405451_2f1c_973a_cd4b_f0754f5d2c44 = [];
            if (!(seq_required_fild instanceof Array)) {
              seq_required_fild = Object.entries(seq_required_fild);
            }
            for (var idx0 = 0; idx0 < seq_required_fild.length; idx0++) {
              var required_fild = seq_required_fild[idx0];
              loop_resultd6405451_2f1c_973a_cd4b_f0754f5d2c44.push(['div', (function() {
                  var new_obj = {
                    style: "margin: 10px 0px;",
                  }
                  return new_obj;
                })(), ['div', (function() {
                  var new_obj = {
                    style: "width: 35%;display: inline-block; font-weight:bold;",
                  }
                  return new_obj;
                })(), required_fild.name],
                ['div', (function() {
                  var new_obj = {
                    style: "width: 65%;display: inline-block;",
                  }
                  return new_obj;
                })(), (function() {
                  var value = required_fild.value;
                  return (function() {
                    if ((value instanceof Array)) {
                      return value.join(", ");
                    } else {
                      return value;
                    }
                  })()
                })()]
              ]);
            }
            return loop_resultd6405451_2f1c_973a_cd4b_f0754f5d2c44;
          })())];
          var view_record_elment = toElement(view_record_content);
          var view_record_div = getById("id_view_record_div");
          return (function() {
            setHtml(view_record_div, "");
            view_record_div.appendChild(view_record_elment);
            openImgsViewer(fullscreen_imgs_viewer_holder, getById("id_img_holder"), imgs, [], true);
            return rHidden(view_records_menu_div)
          })()
        })();
      }
    })()
  })();
};

var loadEntryData = function(id, marker) {
  return (function() {
    var xhr = new XMLHttpRequest();
    return (function() {
      xhr.addEventListener("load", function(event) {
        return (function() {
          var entry = JSON.parse(event.target.responseText);
          var f_img = first(entry.imgs);
          var f_img_path = (function() {
            if (f_img) {
              return prepareImgPath(f_img, true);
            } else {
              return "/imgs/not_found.png";
            }
          })();
          var required_filds = entry.data.reqs;
          var popup_content_description = ['div', (function() {
              var new_obj = {
                class: "",
              }
              return new_obj;
            })(), ['img', (function() {
              var new_obj = {
                src: f_img_path,
                style: "height:200px;",
                class: "point_popup_img",
                onclick: "viewLastEntry()",
              }
              return new_obj;
            })()],
            ['div', (function() {
              var new_obj = {
                class: "entry_popup_fields",
              }
              return new_obj;
            })(), (function() {
              var seq_required_fild = required_filds;
              var loop_result3d1cbc06_d453_daed_2c48_bb47c9bd9408 = [];
              if (!(seq_required_fild instanceof Array)) {
                seq_required_fild = Object.entries(seq_required_fild);
              }
              for (var idx0 = 0; idx0 < seq_required_fild.length; idx0++) {
                var required_fild = seq_required_fild[idx0];
                loop_result3d1cbc06_d453_daed_2c48_bb47c9bd9408.push(['div', (function() {
                  var new_obj = {
                    class: "",
                  }
                  return new_obj;
                })(), ['div', (function() {
                  var new_obj = {
                    class: "popup_context popup_context_left",
                  }
                  return new_obj;
                })(), required_fild.name], (function() {
                  var value = required_fild.value;
                  return ['div', (function() {
                    var new_obj = {
                      class: "popup_context popup_context_right",
                    }
                    return new_obj;
                  })(), (function() {
                    if ((value instanceof Array)) {
                      return required_fild.value.join(", ");
                    } else {
                      return required_fild.value;
                    }
                  })()]
                })()]);
              }
              return loop_result3d1cbc06_d453_daed_2c48_bb47c9bd9408;
            })()],
            ['button', (function() {
              var new_obj = {
                style: "width: 100%;",
                class: "button_class not_select",
                onclick: "viewLastEntry()",
              }
              return new_obj;
            })(), ['span', (function() {
              var new_obj = {
                style: "vertical-align: middle;",
              }
              return new_obj;
            })(), create_icon(16, "visibility")], " Все данные объекта"]
          ];
          var popup_content_html = toHtml(popup_content_description);
          var maps_size_x = screen.width;
          var popup_size_x = (function() {
            if ((maps_size_x < 300)) {
              return maps_size_x;
            } else {
              return 300;
            }
          })();
          var popup = L.popup((function() {
            var new_obj = {
              minWidth: popup_size_x,
            }
            return new_obj;
          })());
          var popup = popup.setContent(popup_content_html);
          return (function() {
            entries_cache.push(entry);
            marker.bindPopup(popup);
            return marker.openPopup()
          })()
        })();
      });
      xhr.addEventListener("error", function(error) {
        return console.log("Error:", error);
      });
      xhr.open("GET", ("/record/" + id));
      return xhr.send()
    })()
  })();
};

var markerOnClickEvent = function(id, marker) {
  return marker.on("click", function(event) {
    return loadEntryData(id, marker);
  });
};

var updatePoint = function(geo_map, data) {
  return (function() {
    (function() {
      var entries_info = data.points;
      return (function() {
        var seq_entry_info = entries_info;
        var loop_resultde4e75d7_0e51_ed66_65c8_f4e753960ff5 = [];
        if (!(seq_entry_info instanceof Array)) {
          seq_entry_info = Object.entries(seq_entry_info);
        }
        for (var idx0 = 0; idx0 < seq_entry_info.length; idx0++) {
          var entry_info = seq_entry_info[idx0];
          loop_resultde4e75d7_0e51_ed66_65c8_f4e753960ff5.push((function() {
            var lat = first(entry_info);
            var lon = second(entry_info);
            var id = entry_info[2];
            var marker = createMarker(geo_map, [lat, lon], point_icon);
            return (function() {
              markerOnClickEvent(id, marker);
              return markers.push(marker)
            })()
          })());
        }
        return loop_resultde4e75d7_0e51_ed66_65c8_f4e753960ff5;
      })()
    })();
    return (function() {
      var aggregations_info = data.centroid;
      return (function() {
        var seq_aggregation_info = aggregations_info;
        var loop_resulte3f5f32f_fb77_6580_9e39_4ab227dc7437 = [];
        if (!(seq_aggregation_info instanceof Array)) {
          seq_aggregation_info = Object.entries(seq_aggregation_info);
        }
        for (var idx0 = 0; idx0 < seq_aggregation_info.length; idx0++) {
          var aggregation_info = seq_aggregation_info[idx0];
          loop_resulte3f5f32f_fb77_6580_9e39_4ab227dc7437.push((function() {
            var lat = first(aggregation_info);
            var lon = second(aggregation_info);
            var cnt = aggregation_info[2];
            var agg_point = L.divIcon((function() {
              var new_obj = {
                html: cnt,
                className: "agg-point-icon",
              }
              return new_obj;
            })());
            var marker = createMarker(geo_map, [lat, lon], agg_point);
            return (function() {
              marker.on("click", function(event) {
                return (function() {
                  var current_zoom = geo_map.getZoom();
                  var max_zoom = geo_map.getMaxZoom();
                  var next_zoom = inc(current_zoom);
                  return (function() {
                    if ((current_zoom < max_zoom)) {
                      return geo_map.setView([lat, lon], next_zoom);
                    }
                  })()
                })();
              });
              return markers.push(marker)
            })()
          })());
        }
        return loop_resulte3f5f32f_fb77_6580_9e39_4ab227dc7437;
      })()
    })()

  })();
};

var prev_geo_map_zoom = geo_map.getZoom();

var prev_form_uuid = null;

var formIsChanged = function(prev_uuid, current_uuid) {
  return !(prev_uuid === current_uuid);
};

var searchQuery = function(geo_map, button) {
  return (function() {
    var search_form_element = button.form;
    var current_form_uuid = search_form_element.getAttribute("uuid");
    var xhr = new XMLHttpRequest();
    var fd = new FormData(search_form_element);
    var current_geo_map_zoom = geo_map.getZoom();
    return (function() {
      var geo_map_bounds = geo_map.getBounds();
      var top_left = geo_map_bounds.getNorthWest();
      var bottom_right = geo_map_bounds.getSouthEast();
      rPolygons();
      var current_slices = createSlices(geo_map);
      var need_update_slices = (function() {
        if (formIsChanged(prev_form_uuid, current_form_uuid)) {
          return current_slices;
        } else {
          return extractSlicesWhichneedUpdate(prev_slices, current_slices);
        }
      })();
      prev_slices = current_slices;
      var need_update_slices = map(function(s) {
        return s['coordinates'];
      }, need_update_slices);
      return (function() {
        xhr.addEventListener("load", function(event) {
          return (function() {
            var json_data = JSON.parse(event.target.responseText);
            var data = json_data.points;
            return (function() {
              (function() {
                if ((prev_geo_map_zoom === current_geo_map_zoom)) {
                  return rNotDisplayedMarkers(current_slices);
                } else {
                  return (function() {
                    prev_geo_map_zoom = current_geo_map_zoom;
                    return rAllMarkers()
                  })();
                }
              })();
              (function() {
                if (formIsChanged(prev_form_uuid, current_form_uuid)) {
                  return rAllMarkers();
                }
              })();
              prev_form_uuid = current_form_uuid;
              return updatePoint(geo_map, data)
            })()
          })();
        });
        xhr.addEventListener("error", function(error) {
          return console.log(error);
        });
        return (function() {
          if (((0 < need_update_slices.length))) {
            return (function() {
              var action = (search_form_element.getAttribute("action") + "/" + current_geo_map_zoom);
              return (function() {
                fd.append("bounds", JSON.stringify(need_update_slices));
                xhr.open("POST", action);
                return xhr.send(fd)
              })()
            })();
          }
        })()
      })()
    })()
  })();
};

var query = function(button) {
  return searchQuery(geo_map, button);
};

geo_map.on("moveend", function(e) {
  return current_category_search_button.click();
});

current_category_search_button.click();