var e=new Promise(function(e){document.querySelector(".logo").addEventListener("click",function(){e()})}),t=new Promise(function(e,t){setTimeout(function(){t(Error("You are out of time!"))},3e3)});function n(){var e=document.createElement("div");e.className="message",e.textContent="Promise was resolved!",document.body.appendChild(e)}function o(){var e=document.createElement("div");e.className="message error-message",e.textContent="Promise was rejected!",document.body.appendChild(e)}e.then(n).catch(o),t.then(n).catch(o);
//# sourceMappingURL=index.58685e09.js.map