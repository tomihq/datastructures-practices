/*
    Realizar una linked list básica.

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

    /*
        Dos casos:
            1. Si la linkedlist está vacía, entonces el nuevo nodo es la head.
            2. Si la linkedlist no esta vacía tengo que ir moviendo hasta que this.head.next sea null.
    */
    add(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
        }else{
            /* 
                ¡No hacer! Estoy modificando la cabeza de la lista a medida que avanzo.
            while(this.head.next){
                this.head = this.head.next;
            }
            this.head.next = node; */

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
console.log(linkedList.size())
console.log(linkedList.show())
linkedList.delete(2);
console.log(linkedList.show())