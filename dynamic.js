function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  details(data.career);
  edu(data.educational_details);
  skill(data.skills);
})
var parent=document.querySelector('.parent');
var child=document.querySelector('.child');
var child1=document.querySelector('.child1');
function profile(pro){
  var image=document.createElement('img');
  image.src=pro.img;
  child.appendChild(image);
  parent.appendChild(child);

  var name1=document.createElement('h1');
  name1.textContent=pro.name;
  child.appendChild(name1);
  parent.appendChild(child);
  var hr=document.createElement('hr');
  child.append(hr);
  var name2=document.createElement('h2');
  name2.textContent=pro.email;
  child.appendChild(name2);
  parent.appendChild(child);
}
function details(car){
  var name2=document.createElement('h1');
  name2.textContent="RESUME";

  var name1=document.createElement('h2');
  name1.textContent="Career Details";
  var name=document.createElement('p');
  name.textContent=car.info;
  child1.append(name2);
  var hr=document.createElement('hr');
  child1.append(hr);
  child1.appendChild(name1);
  child1.appendChild(name);
  parent.appendChild(child1);
}
function edu(edua){
  var n1=document.createElement('h2');
  n1.textContent="Educational Details";
  child1.append(n1);
  parent.appendChild(child1);
  var hr=document.createElement('hr');
  child1.append(hr);
  var table=document.createElement('table');
  let row='';
  table.border='3';
  row +="<tr>"+"<th>"+"sno"+"</th>"+"<th>"+"degree"+"</th>"+"<th>"+"institue"+"</th>"
  +"<th>"+"per"+"</th>"+"</tr>";
  for(i in edua){

  row+="<tr>"+"<td>"+edua[i].sno+"</td>"+"<td>"+edua[i].degree+"</td>"+"<td>"+edua[i].institute+
  "</td>"+"<td>"+edua[i].percentage+"</td>"+"</tr>";
}
table.innerHTML=row;
child1.appendChild(table);
parent.appendChild(child1);

}
function skill(op){
  var ab=document.createElement('h2');
  ab.textContent="Skills";
  child1.append(ab);
  var ul=document.createElement(ul);
  child1.append(ul);
  for(i in op){
    var li=document.createElement("li");
    li.textContent=op[i].info;
    ul.append(li);
  }
  parent.appendChild(child1);
}
