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
    var loop_resultdca1f8d5_3492_3e8f_18f7_1381835a388d = [];
    if (!(seq_key instanceof Array)) {
      seq_key = Object.entries(seq_key);
    }
    for (var idx0 = 0; idx0 < seq_key.length; idx0++) {
      var key = seq_key[idx0];
      loop_resultdca1f8d5_3492_3e8f_18f7_1381835a388d.push([key, obj[key]]);
    }
    return loop_resultdca1f8d5_3492_3e8f_18f7_1381835a388d;
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
        var loop_resultac21e26f_aff8_fadc_c140_49378a1e4230 = [];
        if (!(seq_el instanceof Array)) {
          seq_el = Object.entries(seq_el);
        }
        for (var idx0 = 0; idx0 < seq_el.length; idx0++) {
          var el = seq_el[idx0];
          loop_resultac21e26f_aff8_fadc_c140_49378a1e4230.push((function() {
            if (pred(el)) {
              return result.push(el);
            }
          })());
        }
        return loop_resultac21e26f_aff8_fadc_c140_49378a1e4230;
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
        var loop_result0ac919a5_1c1e_f478_d0b4_20f3df0de049 = [];
        if (!(seq_el instanceof Array)) {
          seq_el = Object.entries(seq_el);
        }
        for (var idx0 = 0; idx0 < seq_el.length; idx0++) {
          var el = seq_el[idx0];
          loop_result0ac919a5_1c1e_f478_d0b4_20f3df0de049.push((function() {
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
        return loop_result0ac919a5_1c1e_f478_d0b4_20f3df0de049;
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
        var loop_result512ca3c8_7bd2_b0cd_f1e2_8c0053ae740a = [];
        if (!(seq_element_attribute instanceof Array)) {
          seq_element_attribute = Object.entries(seq_element_attribute);
        }
        for (var idx0 = 0; idx0 < seq_element_attribute.length; idx0++) {
          var element_attribute = seq_element_attribute[idx0];
          loop_result512ca3c8_7bd2_b0cd_f1e2_8c0053ae740a.push((function() {
            var attribute_name = first(element_attribute);
            var attribute_value = second(element_attribute);
            return (function() {
              if (!(false === attribute_value)) {
                return element.setAttribute(attribute_name, attribute_value);
              }
            })()
          })());
        }
        return loop_result512ca3c8_7bd2_b0cd_f1e2_8c0053ae740a;
      })();
      (function() {
        var seq_inner_element = inner_elements;
        var loop_result331b55d9_9f52_0b11_971a_9a38a4980153 = [];
        if (!(seq_inner_element instanceof Array)) {
          seq_inner_element = Object.entries(seq_inner_element);
        }
        for (var idx0 = 0; idx0 < seq_inner_element.length; idx0++) {
          var inner_element = seq_inner_element[idx0];
          loop_result331b55d9_9f52_0b11_971a_9a38a4980153.push((function() {
            if ((inner_element instanceof Array)) {
              return (function() {
                var first_el = first(inner_element);
                return (function() {
                  if ((first_el instanceof Array)) {
                    return (function() {
                      var seq_sub_inner_element = inner_element;
                      var loop_result97d144a3_2155_4641_2f16_075f6b43a20b = [];
                      if (!(seq_sub_inner_element instanceof Array)) {
                        seq_sub_inner_element = Object.entries(seq_sub_inner_element);
                      }
                      for (var idx0 = 0; idx0 < seq_sub_inner_element.length; idx0++) {
                        var sub_inner_element = seq_sub_inner_element[idx0];
                        loop_result97d144a3_2155_4641_2f16_075f6b43a20b.push(element.appendChild(toElement(sub_inner_element)));
                      }
                      return loop_result97d144a3_2155_4641_2f16_075f6b43a20b;
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
        return loop_result331b55d9_9f52_0b11_971a_9a38a4980153;
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

var search_record_form_submit = function(page_num) {
  page_number.value = page_num;
  return search_record_form.submit();
};

var setDisplay = function(element, display_type) {
  return element.style.display = display_type;
};

var changeOnlyTitleFlag = function(checkbox) {
  return (function() {
    var checked = checkbox.checked;
    var value = id_title_description_holder.value;
    return (function() {
      id_title_input.value = value;
      return (function() {
        if (checked) {
          return id_title_description.value = "";
        } else {
          return id_title_description.value = value;
        }
      })()
    })()
  })();
};

var changeTitleDescriptionInput = function(input, checkbox) {
  return (function() {
    var value = input.value;
    return (function() {
      return changeOnlyTitleFlag(checkbox)
    })()
  })();
};

var address_hints_view_div_onclick_fn = address_hints_view_div.onclick;

var changeOnRemoteFlag = function(id_remote, id_remote_flag) {
  return (function() {
    var checked = id_remote_flag.checked;
    return (function() {
      if (checked) {
        return (function() {
          search_location.disabled = true;
          search_location.placeholder = "Remote..";
          address_hints_view_div.onclick = "";
          address_hints_view_div.classList.add("address_input_div_disabled");
          return id_remote.value = "yes"
        })();
      } else {
        return (function() {
          search_location.disabled = false;
          search_location.placeholder = "Type nearest sity or state";
          address_hints_view_div.onclick = address_hints_view_div_onclick_fn;
          address_hints_view_div.classList.remove("address_input_div_disabled");
          return id_remote.value = ""
        })();
      }
    })()
  })();
};

changeOnRemoteFlag(id_remote, id_remote_flag);