// STL:

var range = function(start, end) {
  var count = end - start;
  var array = [];
  for (var i = start; i < end; i++) {
    array.push(i);
  }
  return array;
}
var getOrDefault = function(coll, idx, def) {
  var element = coll[idx];
  if (element) {
    return element;
  } else {
    return def;
  }
}

var generateUUID = function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' + s4() + s4() + s4();
}

var empty = function(value) {
  if (value) {
    if (value instanceof String)
      return value.length <= 0;
    if (value instanceof Array)
      return value.length <= 0;
    return Object.keys(value).length <= 0;
  }
  return true;
}

// --------------------------------//



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
    var loop_resulte7c24a78_91f3_066e_7bed_dd095c26f211 = [];
    if (!(seq_key instanceof Array)) {
      seq_key = Object.entries(seq_key);
    }
    for (var idx0 = 0; idx0 < seq_key.length; idx0++) {
      var key = seq_key[idx0];
      loop_resulte7c24a78_91f3_066e_7bed_dd095c26f211.push([key, obj[key]]);
    }
    return loop_resulte7c24a78_91f3_066e_7bed_dd095c26f211;
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
        var loop_result90232416_8890_20ee_d361_5f0722660eb0 = [];
        if (!(seq_el instanceof Array)) {
          seq_el = Object.entries(seq_el);
        }
        for (var idx0 = 0; idx0 < seq_el.length; idx0++) {
          var el = seq_el[idx0];
          loop_result90232416_8890_20ee_d361_5f0722660eb0.push((function() {
            if (pred(el)) {
              return result.push(el);
            }
          })());
        }
        return loop_result90232416_8890_20ee_d361_5f0722660eb0;
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
        var loop_result63915e6c_c839_67f7_0499_41ea266a02a7 = [];
        if (!(seq_el instanceof Array)) {
          seq_el = Object.entries(seq_el);
        }
        for (var idx0 = 0; idx0 < seq_el.length; idx0++) {
          var el = seq_el[idx0];
          loop_result63915e6c_c839_67f7_0499_41ea266a02a7.push((function() {
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
        return loop_result63915e6c_c839_67f7_0499_41ea266a02a7;
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
        var loop_result5d43b77f_9916_b190_9ac6_9d9fd56b9906 = [];
        if (!(seq_element_attribute instanceof Array)) {
          seq_element_attribute = Object.entries(seq_element_attribute);
        }
        for (var idx0 = 0; idx0 < seq_element_attribute.length; idx0++) {
          var element_attribute = seq_element_attribute[idx0];
          loop_result5d43b77f_9916_b190_9ac6_9d9fd56b9906.push((function() {
            var attribute_name = first(element_attribute);
            var attribute_value = second(element_attribute);
            return (function() {
              if (!(false === attribute_value)) {
                return element.setAttribute(attribute_name, attribute_value);
              }
            })()
          })());
        }
        return loop_result5d43b77f_9916_b190_9ac6_9d9fd56b9906;
      })();
      (function() {
        var seq_inner_element = inner_elements;
        var loop_result62a74d5b_6658_d77d_16ae_327dc1be5a54 = [];
        if (!(seq_inner_element instanceof Array)) {
          seq_inner_element = Object.entries(seq_inner_element);
        }
        for (var idx0 = 0; idx0 < seq_inner_element.length; idx0++) {
          var inner_element = seq_inner_element[idx0];
          loop_result62a74d5b_6658_d77d_16ae_327dc1be5a54.push((function() {
            if ((inner_element instanceof Array)) {
              return (function() {
                var first_el = first(inner_element);
                return (function() {
                  if ((first_el instanceof Array)) {
                    return (function() {
                      var seq_sub_inner_element = inner_element;
                      var loop_resultf251ecbe_33d7_8f12_4493_ee26b68113c0 = [];
                      if (!(seq_sub_inner_element instanceof Array)) {
                        seq_sub_inner_element = Object.entries(seq_sub_inner_element);
                      }
                      for (var idx0 = 0; idx0 < seq_sub_inner_element.length; idx0++) {
                        var sub_inner_element = seq_sub_inner_element[idx0];
                        loop_resultf251ecbe_33d7_8f12_4493_ee26b68113c0.push(element.appendChild(toElement(sub_inner_element)));
                      }
                      return loop_resultf251ecbe_33d7_8f12_4493_ee26b68113c0;
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
        return loop_result62a74d5b_6658_d77d_16ae_327dc1be5a54;
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

var createIcon = function(icon_size, icon_name) {
  return ['i', (function() {
    var new_obj = {
      class: "material-icons not_select",
      style: ("font-size:" + icon_size + "px"),
    }
    return new_obj;
  })(), icon_name];
};