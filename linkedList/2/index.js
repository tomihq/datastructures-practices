/*
    Reutilizando la linkedlist anterior, implemente un metodo para añadir un nodo al comienzo.

    Rdo: cada nodo tiene su valor y el siguiente nodo

    La complejidad de añadir un elemento es de o(n) pues necesito llegar desde la cabeza hasta que el next sea null para añadir un elemento al final.

    La ventaja contra los arrays (los que son fijos, no hablamos de listas) es que pueden extenderse.

    Una LinkedList podemos decir que solo tiene "Un nodo", el principal, y luego todos estan conectados al primero.

    Los casos de agregar o eliminar siempre se dividen en dos: Si tiene elementos o no tiene elementos.

    Rdo: No tengo que usar nunca this.head.next, sino almacenar el this.head inicialmente en una variable para no mutar la linkedlist.

*/

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null; 
    }

    addFirst(value) {
        const node = new Node(value);
    
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head; 
            this.head = node;
        }
    }

    add(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
        }else{

            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }

    clear(){
        this.head = null; 
    }

    size(){
        let count = 0; 
        let currentNode = this.head;
        while(currentNode){
         count++;
         currentNode = currentNode.next;
        }
        return count;
     }

    show(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value)
            currentNode = currentNode.next;
        }
    }

    delete(value){
        let currentNode = this.head;
        if(currentNode == value){
            currentNode = null;
        }else{
            while(currentNode.next){
                if(currentNode.next.value === value){
                    currentNode.next = currentNode.next.next;
                    break;
                }
                currentNode = currentNode.next;
            }
        }
    }

    
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.addFirst(4);
linkedList.show()