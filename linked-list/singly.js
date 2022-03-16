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



