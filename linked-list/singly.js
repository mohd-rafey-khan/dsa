// DOM PART
const add_btn = document.getElementById('add_data');
const nodevalue = document.getElementById('nodevalue');
const print = document.getElementById('print');
add_btn.addEventListener('click',()=>{
    insert(nodevalue.value);
})
// delete node
const dlt_option = document.getElementById('dltnode');
const dlt_node = document.getElementById('dlt_node');
dlt_node.addEventListener('click',()=>{
    deleteNode(dlt_option.value);
})
// Middle element
const mid_node = document.getElementById('mid_node');
mid_node.addEventListener('click',()=>{
    middleNode();
});




// ### desighn node
const display = document.getElementById('display');

function displayNode(head){
    temp = head;
    display.innerHTML = "";
    while(temp!=null){

        const node = document.createElement('div');
        node.setAttribute('class','node');
        const col1 = document.createElement('div');
        col1.setAttribute('class','col1');
        const arrow = document.createElement('div');
        arrow.setAttribute('class','arrow');


        col1.innerHTML = temp.data;
        node.appendChild(col1);
        node.appendChild(arrow);
        display.append(node);

        temp = temp.next;
    }
}
// highlight middle element with color red
function highlight_mid(index){
    const nodes = document.querySelectorAll('.node');
    nodes[index].firstChild.style.backgroundColor = "red";
}



// ### Node declaration 
class Node{
    // construstor which hold data parameter with default value 0;
    constructor(data=0){
        this.data = data;
        this.next = null;
    }
}

// ### function to insert data into linkde list;
var head = null;
function insert(data){
    let newnode = new Node(data);
    if(head === null){
        head = newnode;
    }else{
        let temp = head;
        while(temp.next!=null) temp = temp.next;
        temp.next = newnode;
    }
    console.log(head);
    displayNode(head);
}
// ### function to delete node;
function deleteNode(status){
    if(status=='first'){
        head = head.next;
    }else if(status=='last'){
        var temp = head;
        while(temp.next.next!=null){
            temp = temp.next;
        }
        console.log(temp);
        temp.next = null;
    }
    displayNode(head);
}
// ### function to find mid element in linked list
function middleNode(){
    var first_node = head;
    var sec_node = first_node;
    var index = 0;
    while(first_node.next!=null && first_node.next.next!=null){
        first_node = first_node.next.next;
        sec_node = sec_node.next;
        index++;
    }
    console.log(`${sec_node.data} is at ${index}`);
    highlight_mid(index);
}


