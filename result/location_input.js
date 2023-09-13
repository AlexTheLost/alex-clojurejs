var newSocket = function() {
  return new WebSocket(("wss://" + window.location.hostname + "/api/ws"));
};

var location_input_changed = true;

var socketOnMessage = function(event) {
  return (function() {
    var data = event.data;
    var addresses = JSON.parse(data);
    var input_value = search_location.value;
    return (function() {
      return (function() {
        if ((location_input_changed && !empty(input_value))) {
          return (function() {
            id_address_hints_div.innerHTML = "";
            id_address_hints_div.appendChild(toElement(['div', (function() {
              var new_obj = {}
              return new_obj;
            })()].concat((function() {
              var seq_addres = addresses;
              var loop_result92a11227_527a_9dc1_c26a_60c19508315c = [];
              if (!(seq_addres instanceof Array)) {
                seq_addres = Object.entries(seq_addres);
              }
              for (var idx0 = 0; idx0 < seq_addres.length; idx0++) {
                var addres = seq_addres[idx0];
                loop_result92a11227_527a_9dc1_c26a_60c19508315c.push(['div', (function() {
                  var new_obj = {
                    class: "founded_address",
                    onclick: ("on_address_select('" + addres.city + ", " + addres.state + "','" + JSON.stringify(addres) + "')"),
                  }
                  return new_obj;
                })(), (addres.city + ", " + addres.state)]);
              }
              return loop_result92a11227_527a_9dc1_c26a_60c19508315c;
            })())));
            return id_address_hints_div.removeAttribute("hidden")
          })();
        }
      })()
    })()
  })();
};

var socketOnClosed = function() {
  socket = newSocket();
  socket.onmessage = socketOnMessage;
  return socket.onclose = socketOnClosed;
};

var checkSocketOnClosed = function() {
  (function() {
    if (!((socket.readyState === 0) || (socket.readyState === 1))) {
      return socketOnClosed();
    }
  })();
  return setTimeout(checkSocketOnClosed, 1000);
};

var socket = newSocket();

socket.onmessage = socketOnMessage;

checkSocketOnClosed();

var search_location_is_focused = false;

var on_address_select = function(txt_addres, json_addres) {
  location_input_changed = false;
  address_hints_view_div.innerText = txt_addres;
  rHidden(address_hints_view_div);
  hidden(search_location);
  hidden(id_address_hints_div);
  search_location_is_focused = false;
  return id_job_location.value = json_addres;
};

var sendLocationForHint = function() {
  return (function() {
    var value = search_location.value;
    return (function() {
      return (function() {
        if (!empty(value)) {
          return socket.send(value);
        } else {
          return (function() {
            id_job_location.value = "";
            return id_address_hints_div.setAttribute("hidden", "hidden")
          })();
        }
      })()
    })()
  })();
};

address_hints_view_div.onclick = function() {
  sendLocationForHint();
  hidden(address_hints_view_div);
  rHidden(search_location);
  rHidden(id_address_hints_div);
  search_location_is_focused = true;
  return search_location.focus();
};

search_location.addEventListener("input", function(event) {
  location_input_changed = true;
  return sendLocationForHint();
});

document.addEventListener("keypress", function(event) {
  return (function() {
    var pressed_key = event.key;
    return (function() {
      if ((("Escape" === pressed_key) && search_location_is_focused)) {
        return (function() {
          return search_location.blur()
        })();
      }
    })()
  })();
});