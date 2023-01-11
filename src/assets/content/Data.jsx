import img from '../images/pic.jpg';
import '../css/style.css';
import arrayText from '../syntax/array.txt';

function copyToClipboard() {
    const codeSnippet = document.getElementById("code-snippet");
    const button = document.getElementById("clipboard-button");

    // Select the text in the code snippet
    codeSnippet.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Change the button text to indicate that the code has been copied
    button.textContent = "Copied!";
}


export const Data = [
    {
        link : "data-structure",
        title : "Data Structure",
        content1 : <><b>A data structure is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. Different types of data structures are suited to different kinds of applications, and some are highly specialized to specific tasks.</b> Here are some examples of common data structures: <br/><br/>

        <strong>Arrays:</strong> An array is a collection of items stored at contiguous memory locations. The items can be of the same type or of different types.<br/>
        
        <strong>Linked Lists:</strong> A linked list is a collection of items that are stored in a linear fashion and linked together using pointers.<br/>
        
        <strong>Stacks:</strong> A stack is a linear data structure that follows the Last In, First Out (LIFO) principle.<br/>
        
        <strong>Queues:</strong> A queue is a linear data structure that follows the First In, First Out (FIFO) principle.<br/>
        
        <strong>Trees:</strong> A tree is a non-linear data structure that consists of nodes connected by edges. It is often used to represent hierarchical relationships.<br/>
        
        <strong>Graphs:</strong> A graph is a non-linear data structure that consists of a set of vertices (nodes) and a set of edges connecting the vertices.<br/>
        
        <strong>Hash Tables:</strong> A hash table is a data structure that stores data in an associative array, which is a collection of key-value pairs.<br/><br/>
        
        These are just a few examples of common data structures. There are many others as well, each with its own set of characteristics and uses.</>,
        image : {img}
    },
    {
        link : "array",
        title : "Array",
        content1 : <><b>An array is a data structure that stores a collection of elements, which are accessed by their position or index. Each element in the array is identified by an index, which is an integer value that ranges from 0 to the size of the array minus 1.</b><br/><br/>

        Here's an example of an array of integers in Java:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* int[] numbers = {1, 2, 3, 4, 5}; <br/> */}
                System.out.println(numbers[2]); <br/>
            </code></pre>
        </div>
        <br/>
            In this example, numbers is an array of integers with 5 elements. Like the examples before, we can access individual elements of the array by using square brackets and the index of the element we want to access. <br/>
            You can also create an array by specifying the size and type, like this:
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                int[] numbers = new int[5]; <br/>
            </code></pre>
        </div>
        <br/>
        This creates an empty array of integers with a length of 5, which means it can store 5 elements. You can then add elements to the array by using the assignment operator and specifying the index, like this: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                numbers[0] = 1; <br/>
                numbers[1] = 2; <br/>
            </code></pre>
        </div>
        <br/>
        You can also use a loop to initialize the array
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* for (int i = 0; i < numbers.length; i++) { <br/>
                    numbers[i] = i; <br/>
                } */}
            </code></pre>
        </div>
        <br/>
        Java also provides a class called ArrayList which allows you to create resizable array in a more dynamic way, where you can add and remove elements to the array dynamically, instead of having a fixed size like normal arrays. Here is an example of how to use an ArrayList: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
            import java.util.ArrayList; <br/>

            {/* ArrayList<Integer> numbers = new ArrayList<Integer>(); */} <br/>
            uncomment array list above... <br/>
            numbers.add(1); <br/>
            numbers.add(2); <br/>
            numbers.add(3); <br/>
            numbers.remove(1); // removes the element at index 1 
            </code></pre>
        </div>
        <br/>
        It's important to note that, like in most programming languages, arrays are 0-indexed in Java, meaning that the first element has an index of 0, the second element has an index of 1, and so on.
        <br/>
       </>,
        image : {img}
    },
    {
        link : "1d-array",
        title : "1D Array",
        content1 : <><b>A one-dimensional (1D) array is a type of array that has only one dimension, and stores a linear collection of elements. Each element in a 1D array is accessed by its index, which is an integer value representing the position of the element in the array. </b><br/><br/>

        In Java, a 1D array can be declared and initialized in several ways:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                // Declare and initialize an array using the array initializer <br/>
                {/* int[] numbers = {1, 2, 3, 4, 5}; <br/><br/> */}

                // Declare an array and then initialize its elements individually <br/>
                int[] numbers = new int[5]; <br/>
                numbers[0] = 1; <br/>
                numbers[1] = 2; <br/>
                numbers[2] = 3; <br/>
                numbers[3] = 4; <br/>
                numbers[4] = 5; <br/><br/>

                // Declare and initialize an array using a for loop <br/>
                int[] numbers = new int[5]; <br/>
                {/* for (int i = 0; i < numbers.length; i++) { <br/> */}
                    numbers[i] = i; <br/>
                {/* } <br/> */}
            </code></pre>
        </div>
        <br/>
        In these examples, numbers is a 1D array of integers with 5 elements. As previously mentioned, you can access individual elements of the array by using square brackets and the index of the element you want to access, like this: 
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                System.out.println(numbers[2]); <br/>
            </code></pre>
        </div>
        <br/>
        This will print the element at the index 2 of the array, which is 3. <br/>
        1D arrays are useful when you need to store a collection of similar elements that can be accessed by an integer index, such as a list of student grades, a list of temperatures, or a list of stock prices. They are also useful as function arguments, so you can pass an array of values to a function and manipulate them inside that function. <br/>
        It's worth noting that there's also another way of creating 1D array in Java through the use of Array class, for example: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                int[] numbers = Array.of(1, 2, 3, 4, 5); <br/>
            </code></pre>
        </div>
        <br/>
        This is a new feature from Java 9, it allows to create arrays in a more concise way, and it is also type-safe. <br/>
       </>,
        image : {img}
    },
    {
        link : "2d-array",
        title : "2D Array",
        content1 : <><b>A two-dimensional (2D) array is an array that has two dimensions, and stores a grid of elements. Each element in a 2D array is accessed by its row and column indices, which are integer values representing the position of the element in the grid.</b><br/><br/>

        In Java, a 2D array is actually an array of arrays, and can be declared and initialized in several ways:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                // Declare and initialize a 2D array using the array initializer <br/>
                {/* int[][] matrix = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} }; <br/><br/> */}

                // Declare a 2D array and then initialize its elements individually <br/>
                int[][] matrix = new int[3][3]; <br/>
                matrix[0][0] = 1; <br/>
                matrix[0][1] = 2; <br/>
                matrix[0][2] = 3; <br/>
                matrix[1][0] = 4; <br/>
                matrix[1][1] = 5; <br/>
                matrix[1][2] = 6; <br/>
                matrix[2][0] = 7; <br/>
                matrix[2][1] = 8; <br/>
                matrix[2][2] = 9; <br/><br/>
 
                // Declare and initialize a 2D array using nested for loops <br/>
                int[][] matrix = new int[3][3]; <br/>
                {/* for (int i = 0; i < matrix.length; i++) { <br/>
                    for (int j = 0; j < matrix[i].length; j++) { <br/>
                        matrix[i][j] = i * 3 + j + 1; <br/>
                    } <br/>
                } */}
            </code></pre>
        </div>
        <br/>
        In these examples, matrix is a 2D array of integers with 3 rows and 3 columns. You can access individual elements of the array by using two sets of square brackets, one for the row and one for the column, like this: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
            System.out.println(matrix[1][1]); <br/>
            </code></pre>
        </div>
        <br/>
        This will print the element at the position 1,1 of the matrix, which is 5. <br/>
        2D arrays are useful for storing data that has a logical structure, like a table of data, a chess board, a map, etc, They also can be used to store images and other types of data that have a 2D structure. <br/>
        It's worth mentioning that, like with 1D arrays, you can use Array class introduced in Java 9 to create 2D arrays: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
            int[][] matrix = Array.of(Array.of(1, 2, 3), Array.of(4, 5, 6), Array.of(7, 8, 9)); <br/>
            </code></pre>
        </div>
        <br/>
        This creates a 2D array in a more concise and type-safe way. <br/>
       </>,
        image : {img}
    },
    {
        link : "linkedlist",
        title : "Linked List",
        content1 : <><b>A linked list is a data structure that stores a collection of elements, called nodes, in which each node points to the next node in the list. It is a dynamic data structure, meaning that the number of elements in a linked list can change during the program's execution.</b><br/><br/>

        In Java, you can use a class and object-oriented programming to create a linked list. You can create a class called Node that will represent a node in the linked list. The class would typically have two fields: data, which stores the value of the element, and next, which stores a reference to the next node in the list.<br/><br/>
        Here's an example of how you might declare a basic linked list node in Java:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                class Node { <br/>
                    // int data; <br/>
                    // Node next; <br/>
                    // public Node(int data) { <br/>
                    //     this.data = data; <br/>
                    //     this.next = null; <br/>
                    // } <br/>
                } <br/>
            </code></pre>
        </div>
        <br/>
        In this example, the Node class contains two fields: an int field named data that stores the element's value and a Node field named next that points to the next element in the list. <br/>
        A linked list is typically composed of multiple nodes that are linked together, with each node pointing to the next node in the list. The last node in the list points to null indicating the end of the list. <br/><br/>
        Here is an example of how you might create a basic linked list in Java: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                Node head = new Node(10); <br/>
                Node second = new Node(20); <br/>
                Node third = new Node(30); <br/>
                head.next = second; <br/>
                second.next = third; <br/>
            </code></pre>
        </div>
        <br/>
        In this example, we created three nodes and linked them together, forming a list with three elements: 10, 20, and 30. The variable head points to the first element of the list, which has a value of 10. The second element, which has a value of 20, is located at the address stored in head.next, and so on. <br/>
        Java already has a built-in class for linked lists called LinkedList, it implements the List interface and you can use it without the need of creating your own LinkedList class. <br/>
       </>,
        image : {img}
    },
    {
        link : "singly-linkedlist",
        title : "Singly Linked List",
        content1 : <><b>A singly linked list is a data structure that consists of a chain of nodes, where each node contains an element and a reference to the next node in the list. The first node is called the head of the list, and the last node points to null, indicating the end of the list. The list has no reference to previous node, hence called Singly Linked List.</b><br/><br/>

        In Java, you can implement a singly linked list using a class that defines a Node and a LinkedList class. Here's an example of a simple singly linked list implementation in Java:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* class Node { <br/>
                    int data; <br/>
                    Node next; <br/><br/>

                    public Node(int data) { <br/>
                        this.data = data; <br/>
                    } <br/>
                } <br/>
 
                class LinkedList { <br/>
                    Node head; <br/><br/>

                    public void append(int data) { <br/>
                        if (head == null) { <br/>
                            head = new Node(data); <br/>
                            return; <br/>
                        } <br/><br/>

                        Node current = head; <br/>
                        while (current.next != null) { <br/>
                            current = current.next; <br/>
                        } <br/>

                        current.next = new Node(data); <br/>
                    } <br/><br/>

                    public void prepend(int data) { <br/>
                        Node newHead = new Node(data); <br/>
                        newHead.next = head; <br/>
                        head = newHead; <br/>
                    } <br/><br/>

                    public void delete(int data) { <br/>
                        if (head == null) { <br/>
                            return; <br/>
                        } <br/><br/>

                        if (head.data == data) { <br/>
                            head = head.next; <br/>
                            return; <br/>
                        } <br/><br/>

                        Node current = head; <br/>
                        while (current.next != null) { <br/>
                            if (current.next.data == data) { <br/>
                                current.next = current.next.next; <br/>
                                return; <br/>
                            } <br/>
                            current = current.next; <br/>
                        } <br/>
                    } <br/>
                }  */}
            </code></pre>
        </div>
        <br/>
        This implementation includes basic operations like insertions(append and prepend) and deletion of an element in the linked list. <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
            LinkedList list = new LinkedList(); <br/>
            list.append(1); <br/>
            list.append(2); <br/>
            list.append(3); <br/>
            list.prepend(0); <br/>
            list.delete(2); <br/>
            </code></pre>
        </div>
        <br/>
        In this example, we are creating a new list and adding elements to it using append() and prepend() methods, and deleting an element using the delete() method. The singly linked list can also be traversed by starting from the head node, and following the next references until the end of the list. <br/>
        It is worth noting that, there are other types of linked list like circular linked list, doubly linked list etc, with different characteristics and trade offs depending on the use case, but singly linked list has the lowest overhead among all of them. <br/>
       </>,
        image : {img}
    },
    {
        link : "doubly-linkedlist",
        title : "Doubly Linked List",
        content1 : <><b>A doubly linked list is similar to a singly linked list, but each node contains an additional reference to the previous node in the list, as well as the next node. This allows for more flexibility when traversing the list, as you can traverse it in either direction (forward or backward) .</b><br/><br/>

        Here's an example of a simple doubly linked list implementation in Java:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* class Node { <br/>
                    int data; <br/>
                    Node next; <br/>
                    Node prev; <br/><br/>
                
                    public Node(int data) { <br/>
                        this.data = data; <br/>
                    } <br/>
                } <br/><br/>

                class DoublyLinkedList { <br/>
                    Node head; <br/>
                    Node tail; <br/><br/>
                 
                    public void append(int data) { <br/>
                        Node newNode = new Node(data); <br/>
                        if (head == null) { <br/>
                            head = newNode; <br/>
                            tail = newNode; <br/>
                            return; <br/>
                        } <br/>
                        tail.next = newNode; <br/>
                        newNode.prev = tail; <br/>
                        tail = newNode; <br/>
                    } <br/><br/>

                    public void prepend(int data) { <br/>
                        Node newNode = new Node(data); <br/>
                        newNode.next = head; <br/>
                        head.prev = newNode; <br/>
                        head = newNode; <br/>
                    } <br/><br/>
                    
                    public void delete(int data) { <br/>
                        if (head == null) { <br/>
                            return; <br/>
                        } <br/>
                        if (head.data == data) { <br/>
                            head = head.next; <br/>
                            head.prev = null; <br/>
                            return; <br/>
                        } <br/>
                        Node current = head; <br/>
                        while (current != null) { <br/>
                            if (current.data == data) { <br/>
                                current.prev.next = current.next; <br/>
                                if (current.next != null) { <br/>
                                    current.next.prev = current.prev; <br/>
                                } else { <br/>
                                    tail = current.prev; <br/>
                                } <br/>
                                return; <br/>
                            } <br/>
                            current = current.next; <br/>
                        } <br/>
                    } <br/>
                }   */}
            </code></pre>
        </div>
        <br/>
        In this example, DoublyLinkedList class has 3 main operations: append, prepend and delete. The append() and prepend() method insert elements in the linked list, and delete() method deletes the element passed to it. The tail reference is used to keep track of the last element in the list, which allows for O(1) append operations. <br/>
        As you can see, the doubly linked list implementation has more complexity than singly linked list, since it needs to maintain a reference to both the previous and next nodes, but the extra complexity also allows for more flexibility when traversing the list and for some operations to have O(1) time complexity like deletion and insertion at the end of the list. <br/>
        It's important to note that, depending on the use case and the operations needed, either a singly or doubly linked list can be more appropriate. It is important to weigh the trade-offs and choose the implementation that best fits your needs. <br/>
       </>,
        image : {img}
    },
    {
        link : "circular-singly-linkedlist",
        title : "Circular Singly Linked List",
        content1 : <><b>A circular singly linked list is a variation of the singly linked list where the last node in the list points back to the first node, forming a loop. It's called circular because of this looping behavior. A circular linked list can be either a circular singly linked list or a circular doubly linked list.</b><br/><br/>

        Here's an example of a simple circular singly linked list implementation in Java:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* class Node { <br/>
                    int data; <br/>
                    Node next; <br/><br/>

                    public Node(int data) { <br/>
                        this.data = data; <br/>
                    } <br/>
                } <br/><br/>

                class CircularLinkedList { <br/>
                    Node head; <br/><br/>

                    public void append(int data) { <br/>
                        if (head == null) { <br/>
                            head = new Node(data); <br/>
                            head.next = head; <br/>
                            return; <br/>
                        } <br/><br/>

                        Node current = head; <br/>
                        while (current.next != head) { <br/>
                            current = current.next; <br/>
                        } <br/><br/>

                        Node newNode = new Node(data); <br/>
                        newNode.next = head; <br/>
                        current.next = newNode; <br/>
                    } <br/>
                    // the other methods like delete, insert, etc can be implemented similar to the singly linked list 
                } */}
            </code></pre>
        </div>
        <br/>
        In this example, CircularLinkedList class has an append() method to insert elements in the linked list, and other operations like delete, insert etc can be implemented similarly as the singly linked list. The key difference here is that, when the last node is reached, it points back to the head of the list, forming a loop. <br/>
        Circular linked list are used in scenarios where a list needs to be circular, a common use case is when the list is used as a buffer and new items are added to the front while oldest items are removed from the back. Other use cases are in the implementation of certain algorithms such as cycle detection in a graph. <br/>
        It's important to note that traversing a circular linked list requires extra care, to avoid infinite loops, a technique like marking nodes as visited is used, or to keep a counter for the number of nodes visited. <br/>
       </>,
        image : {img}
    },
    {
        link : "circular-doubly-linkedlist",
        title : "Circular Doubly Linked List",
        content1 : <><b>A circular doubly linked list is similar to a circular singly linked list, but it has an additional reference to the previous node in addition to the next node in the list. This allows for more flexibility when traversing the list in either direction, but also increases the complexity of the implementation. </b><br/><br/>

        Here's an example of a simple circular doubly linked list implementation in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* class Node { <br/>
                    int data; <br/>
                    Node next; <br/>
                    Node prev; <br/><br/>

                    public Node(int data) { <br/>
                        this.data = data; <br/>
                    } <br/>
                } <br/><br/>

                class CircularDoublyLinkedList { <br/>
                    Node head; <br/><br/>
                
                    public void append(int data) { <br/>
                        Node newNode = new Node(data); <br/>
                        if (head == null) { <br/>
                            head = newNode; <br/>
                            head.next = head; <br/>
                            head.prev = head; <br/>
                            return; <br/>
                        } <br/>
                        newNode.prev = head.prev; <br/>
                        newNode.next = head; <br/>
                        head.prev.next = newNode; <br/>
                        head.prev = newNode; <br/>
                    }  */}
            </code></pre>
        </div>
        <br/>
       </>,
        image : {img}
    },
    {
        link : "queue",
        title : "Queue",
        content1 : <><b>A queue is a data structure that follows the First-In-First-Out (FIFO) principle, which means that the first element added to the queue will be the first one to be removed. It's often referred to as a "waiting line" or a "line of customers" where customers are added at the back of the queue and served from the front of the queue. </b><br/>

        In Java, you can implement a queue using an array or a linked list, but the most commonly used implementation is using an array along with two variables: the head and the tail indices. <br/><br/>
        Here's an example of a simple queue implementation using an array in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* class Queue { <br/>
                    int[] items; <br/>
                    int head; <br/>
                    int tail; <br/><br/>

                    public Queue(int capacity) { <br/>
                        items = new int[capacity]; <br/>
                    } <br/><br/>

                    public void enqueue(int item) { <br/>
                        if (tail == items.length) { <br/>
                            if (head == 0) { <br/>
                                System.out.println("Queue is full"); <br/>
                                return; <br/>
                            } <br/>
                            // shift elements to the left to remove the head 
                            for (int i = head; i < tail; i++) { <br/>
                                items[i - head] = items[i]; <br/>
                            } <br/>
                            tail = tail - head; <br/>
                            head = 0; <br/>
                        } <br/>
                        items[tail++] = item; <br/>
                    } <br/><br/>

                    public int dequeue() { <br/>
                        if (head == tail) { <br/>
                            System.out.println("Queue is empty"); <br/>
                            return -1; <br/>
                        } <br/>
                        return items[head++]; <br/>
                    } <br/>
                }  */}
            </code></pre>
        </div>
        <br/>
        In this implementation, the Queue class has three instance variables: an int array called items which stores the elements in the queue, head variable that stores the index of the front element of the queue, and tail variable that stores the index of the next available position in the array. The enqueue() method adds an element to the tail of the queue and the dequeue() method removes the element from the head of the queue. <br/><br/>
        This is just one example of how you can implement a queue in Java, other examples include using a singly linked list, a doubly linked list, and using the pre-built Queue class in Java collections framework. The pre-built classes in Java collections framework such as ArrayDeque, LinkedList can be used as a queue as well, they have the same behavior as described above and they are thread-safe and resizable. <br/>
       </>,
        image : {img}
    },
    {
        link : "priority-queue",
        title : "Priority Queue",
        content1 : <><b>A priority queue is a special type of queue where each element has a priority associated with it. In a priority queue, an element with a high priority is dequeued before an element with a low priority. If two elements have the same priority, they are served according to their order in the queue. It can also be implemented as a min heap or max heap, where the smallest or the largest element respectively is at the top of the heap. </b><br/>

        In Java, there is a pre-built PriorityQueue class in the java.util package that implements a priority queue using a min-heap. Here's an example of how you can use the PriorityQueue class to create a priority queue and add elements to it: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* PriorityQueue<Integer> pq = new PriorityQueue<Integer>(); <br/> */}
                pq.add(3); <br/>
                pq.add(1); <br/>
                pq.add(2); <br/>
            </code></pre>
        </div>
        <br/>
        In this example, a priority queue is created, and three elements are added to it. Since the PriorityQueue class uses a min-heap, the element with the lowest value will be at the head of the queue. When you call poll() function to dequeue element it will remove the element which has the lowest priority. <br/><br/>
        You can also use a Comparator while creating a priority queue to define the priority of elements in the queue: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* PriorityQueue<Integer> pq = new PriorityQueue<Integer>(new Comparator<Integer>() { 
                    public int compare(Integer a, Integer b) { 
                    return b - a; 
                } 
            });  */}
            </code></pre>
        </div>
        <br/>
        This will create a max-heap where the element with the highest value will be at the head of the queue. <br/>
        Priority Queue can be used in the scenarios where the elements need to be processed based on their priority, for example in Dijkstra's Algorithm for shortest path, Huffman coding for data compression, Prim's algorithm for finding Minimum Spanning Tree, etc. <br/>
        It is important to note that, a priority queue can have multiple solutions, it depends on how the priority is defined and on the use case. In some cases a min heap might be more appropriate, in other cases a max heap. <br/>
       </>,
        image : {img}
    },
    {
        link : "stack",
        title : "Stack",
        content1 : <><b>A stack is a data structure that follows the Last-In-First-Out (LIFO) principle, which means that the last element added to the stack will be the first one to be removed. It's often visualized as a "vertical stack" of elements, with the most recent element added at the top and the oldest element at the bottom. </b><br/>

        In Java, you can implement a stack using an array or a linked list, but the most commonly used implementation is using an array along with an integer variable called top to keep track of the index of the top of the stack. <br/><br/>
        Here's an example of a simple stack implementation using an array in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* class Stack {
                    int[] items;
                    int top;

                    public Stack(int capacity) {
                        items = new int[capacity];
                    }

                    public void push(int item) {
                        if (top == items.length) {
                            System.out.println("Stack is full");
                            return;
                        }
                        items[top++] = item;
                    }

                    public int pop() {
                        if (top == 0) {
                            System.out.println("Stack is empty");
                            return -1;
                        }
                        return items[--top];
                    }
                } */}
            </code></pre>
        </div>
        <br/>
        In this implementation, the Stack class has two instance variables: an int array called items which stores the elements in the stack, and top variable that stores the index of the top of the stack. The push() method adds an element to the top of the stack and the pop() method removes the element from the top of the stack. <br/>
        This is just one example of how you can implement a stack in Java, other examples include using a singly linked list, a doubly linked list and using the pre-built Stack class in Java collections framework. <br/>
        It's important to note that, Stack data structure can be used in many algorithms such as the undo-redo feature in a text editor, matching brackets in a code, evaluation of postfix expressions, in the implementation of certain algorithms such as Depth First Search and in many other use cases. <br/>
       </>,
        image : {img}
    },
    {
        link : "time-complexity",
        title : "Time Complexity",
        content1 : <><b>Time complexity is a measure of how long an algorithm takes to run as a function of the size of the input. It's often represented using big O notation, which expresses the upper bound of the running time of an algorithm. </b><br/>

        The time complexity of an algorithm can be determined by counting the number of basic operations the algorithm performs. For example, if an algorithm requires a constant number of operations regardless of the size of the input, its time complexity is O(1). If the number of operations grows linearly with the size of the input, the time complexity is O(n), where n is the size of the input. <br/><br/>
        Here are a few examples of time complexity in Java: <br/>
        <b>Linear search:</b> The time complexity of linear search algorithm is O(n), where n is the size of the input array. This is because in the worst case, the algorithm has to iterate through the entire array to find the element. Here's an example of linear search in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* public static int linearSearch(int[] array, int key) {
                    for (int i = 0; i < array.length; i++) {
                        if (array[i] == key) {
                            return i;
                        }
                    }
                    return -1;
                } */}
            </code></pre>
        </div>
        <br/>
        <b>Binary search: </b> The time complexity of binary search algorithm is O(log n), where n is the size of the input array. This is because in each step of the algorithm, it eliminates half of the remaining possibilities. Here's an example of binary search in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* public static int binarySearch(int[] array, int key) {
                    int left = 0;
                    int right = array.length - 1;
                    while (left <= right) {
                        int middle = left + (right - left) / 2;
                        if (array[middle] == key) {
                            return middle;
                        } else if (array[middle] < key) {
                            left = middle + 1;
                        } else {
                            right = middle - 1;
                        }
                    }
                    return -1;
                } */}
            </code></pre>
        </div>
        <br/>
        <b>Bubble sort:  </b> The time complexity of bubble sort algorithm is O(n^2) in the worst case and average case. This is because for each element, the algorithm has to compare it with all other elements and swap them if necessary. Here's an example of bubble sort in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* public static void bubbleSort(int[] array) {
                    for (int i = 0; i < array.length - 1; i++) {
                        for (int j = 0; j < array.length - i - 1; j++) {
                            if (array[j] > array[j + 1]) {
                                int temp = array[j];
                                array[j] = array[j + 1];
                                array[j + 1] = temp;
                            }
                        }
                    }
                } */}
            </code></pre>
        </div>
        <br/>
        The time complexity analysis for an algorithm is important because it can help you to choose the most efficient algorithm for a given task, especially when the size of the input data is large. It's worth noting that, the time complexity of an algorithm can change with the implementation and the best case, worst case, average case all can have different time complexities. <br/>
       </>,
        image : {img}
    },
    {
        link : "space-complexity",
        title : "Space Complexity",
        content1 : <><b>Space complexity is a measure of how much memory an algorithm uses as a function of the size of the input. Like time complexity, space complexity is often represented using big O notation. </b><br/>

        The space complexity of an algorithm can be determined by counting the amount of memory used by the algorithm, including memory used by the program itself, memory used by any data structures, and memory used for any temporary variables. <br/><br/>
        Here are a few examples of space complexity in Java: <br/>
        <b>Linear search:</b> The space complexity of linear search algorithm is O(1), as it only uses a few variables like an index variable i, and key variable. Here's an example of linear search in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* public static int linearSearch(int[] array, int key) {
                    for (int i = 0; i < array.length; i++) {
                        if (array[i] == key) {
                            return i;
                        }
                    }
                    return -1;
                } */}

            </code></pre>
        </div>
        <br/>
        <b>Recursive fibonacci:  </b> The space complexity of the recursive fibonacci algorithm is O(n), where n is the input number. In the worst case it calls fibonacci(n-1) and fibonacci(n-2) so the amount of memory required increases by a multiple of 2 on each call, as each level of recursion requires a new stack frame. Here's an example of recursive fibonacci in Java:  <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* public static int fibonacci(int n) {
                    if (n <= 1) {
                        return n;
                    }
                    return fibonacci(n-1) + fibonacci(n-2);
                } */}
            </code></pre>
        </div>
        <br/>
        <b>Merge sort:</b> The space complexity of the merge sort algorithm is O(n) in the worst case and average case, as it requires a temporary array to merge the sorted sub-arrays. Here's an example of merge sort in Java:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* public static void mergeSort(int[] array) {
                    if (array.length < 2) {
                        return;
                    }

                    int middle = array.length / 2;
                    int[] left = Arrays.copyOfRange(array, 0, middle);
                    int[] right = Arrays.copyOfRange(array, middle, array.length);

                    mergeSort(left);
                    mergeSort(right);

                    int i = 0, j = 0, k = 0;
                    while (i < left.length && j < right.length) {
                        if (left[i] <= right[j]) {
                        while (i < left.length && j < right.length) {
                        if (left[i] <= right[j]) {
                            array[k] = left[i];
                            i++;
                        } else {
                            array[k] = right[j];
                            j++;
                        }
                        k++;
                    }
                    while (i < left.length) {
                        array[k] = left[i];
                        i++;
                        k++;
                    }
                    while (j < right.length) {
                        array[k] = right[j];
                        j++;
                        k++;
                    }
                } */}
            </code></pre>
        </div>
        <br/>
        It's worth noting that the space complexity of merge sort is independent of the sorting order and is same for both best, worst and average cases. <br/>
        Space complexity is an important aspect of an algorithm because it can be a limiting factor when working with large inputs or when working in a memory-constrained environment. It's good practice to always consider the space complexity of an algorithm while designing and evaluating them. <br/>
       </>,
        image : {img}
    },
    {
        link : "recursion",
        title : "Recursion",
        content1 : <><b>Recursion is a programming technique where a function calls itself in order to solve a problem. In a recursive function, the problem is divided into one or more smaller subproblems, each of which is solved by calling the function again with modified input. Eventually, the function reaches a base case, which is a condition that stops the recursion, and the function returns a value or solution to the original problem. </b><br/>

        Here's an example of a simple recursive function in Java that calculates the factorial of a given number: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* public static int factorial(int n) {
                    if (n == 0) {
                        return 1;
                    }
                    return n * factorial(n - 1);
                } */}
            </code></pre>
        </div>
        <br/>
        In this example, the factorial function takes an integer n as input, and it checks if n is equal to 0. If it is, it returns 1, which is the base case of the recursion. If n is not equal to 0, the function returns n multiplied by the factorial of n-1, which is calculated by calling the function again with input n-1. <br/>
        Recursive function can be useful when the problem at hand can be broken down into subproblems that are similar in nature to the original problem. Examples of such problems include traversing a tree or a graph data structure, finding the nth Fibonacci number and solving mathematical problems like the Tower of Hanoi problem. <br/>
        It's important to note that not all problems can be solved using recursion and it requires careful design and implementation to avoid infinite loops and stack overflow. Also, recursive function might use more memory because of stack overflow and it could be less efficient than iterative function. But in some cases recursive function might be more readable and easy to understand then iterative version. <br/>
       </>,
        image : {img}
    },
    {
        link : "trees",
        title : "Trees",
        content1 : <><b>A tree is a non-linear data structure that simulates a hierarchical structure with a set of connected nodes. A tree consists of a set of nodes and edges that connect them. Each node, also called a vertex, can have zero or more child nodes, but it has only one parent node, except for the root node, which has no parent. The topmost node in the tree is called the root node, and the nodes that don't have any child nodes are called leaf nodes. </b><br/>

        There are different types of trees like binary tree, binary search tree, AVL tree, B-tree etc. <br/><br/>
        Here's an example of a simple binary tree implementation in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* class Node {
                    int data;
                    Node left;
                    Node right;

                    public Node(int data) {
                        this.data = data;
                    }
                }

                class BinaryTree {
                    Node root;

                    public void add(int data) {
                        root = addRecursive(root, data);
                    }

                    private Node addRecursive(Node current, int data) {
                        if (current == null) {
                            return new Node(data);
                        }
                        if (data < current.data) {
                            current.left = addRecursive(current.left, data);
                        } else if (data > current.data) {
                            current.right = addRecursive(current.right, data);
                        } else {
                            return current;
                        }
                        return current;
                    }
                } */}
            </code></pre>
        </div>
        <br/>
        In this example, the Node class is the basic building block of the binary tree, it has three fields: data, left, and right. The left field is a reference to the left child, and the right field is a reference to the right child. The BinaryTree class provides the basic functionality for adding nodes to the tree. The add() method creates the root node of the tree or it traverses the tree recursively in order to find the right position for the new node. <br/>
        Trees are useful for problems that involve hierarchical relationships and where the data needs to be searched, added or removed efficiently. Examples of such problems include file systems, web pages, and network routing protocols. <br/>
        It's worth noting that, trees are used in many algorithms and data structure such as sorting and searching, path finding, and data compression and so on. <br/>
       </>,
        image : {img}
    },
    {
        link : "binary-tree",
        title : "Binary Tree",
        content1 : <><b>A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. This contrast with other types of trees, such as B-trees, which can have more than two children per node. A binary tree can be used for many different purposes, for example, for storage and retrieval of data, to find the shortest path between two nodes or for the implementation of certain algorithms such as the Huffman coding. </b><br/><br/>

        Here's an example of a simple binary tree implementation in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* class Node {
                    int data;
                    Node left;
                    Node right;

                    public Node(int data) {
                        this.data = data;
                    }
                }

                class BinaryTree {
                    Node root;

                    public void add(int data) {
                        root = addRecursive(root, data);
                    }

                    private Node addRecursive(Node current, int data) {
                        if (current == null) {
                            return new Node(data);
                        }
                        if (data < current.data) {
                            current.left = addRecursive(current.left, data);
                        } else if (data > current.data) {
                            current.right = addRecursive(current.right, data);
                        } else {
                            return current;
                        }
                        return current;
                    }
                } */}
            </code></pre>
        </div>
        <br/>
        In this example, the Node class is the basic building block of the binary tree, it has three fields: data, left, and right. The left field is a reference to the left child, and the right field is a reference to the right child. The BinaryTree class provides the basic functionality for adding nodes to the tree. The add() method creates the root node of the tree or it traverses the tree recursively in order to find the right position for the new node. <br/>
        Binary trees can be used in many different algorithms and data structures such as sorting algorithms, searching algorithms, and data compression algorithms. They also play a significant role in data structures like Binary Search Trees, AVL Trees, Heaps and Tries. <br/>
        It's important to note that if a tree is not a binary tree, it can have a different number of child for each node, and the algorithms and properties might differ from binary tree algorithms. <br/>
       </>,
        image : {img}
    },
    {
        link : "binary-search-tree",
        title : "Binary Search Tree",
        content1 : <><b>A binary search tree (BST) is a binary tree data structure in which each node has at most two children, and is characterized by the property that the value of each node is greater than or equal to the values in its left subtree and less than or equal to the values in its right subtree. This ordering of elements allows for efficient insertion, deletion, and search operations. </b><br/><br/>

        Here's an example of a simple binary search tree implementation in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* class Node {
                    int data;
                    Node left;
                    Node right;

                    public Node(int data) {
                        this.data = data;
                    }
                }

                class BinarySearchTree {
                    Node root;

                    public void add(int data) {
                        root = addRecursive(root, data);
                    }

                    private Node addRecursive(Node current, int data) {
                        if (current == null) {
                            return new Node(data);
                        }

                        if (data < current.data) {
                            current.left = addRecursive(current.left, data);
                        } else if (data > current.data) {
                            current.right = addRecursive(current.right, data);
                        } else {
                            return current;
                        }
                        return current;
                    }

                    public boolean contains(int data) {
                        return containsRecursive(root, data);
                    }

                    private boolean containsRecursive(Node current, int data) {
                        if (current == null) {
                            return false;
                        }
                        if (data == current.data) {
                            return true;
                        }
                        return data < current.data
                                ? containsRecursive(current.left, data)
                                : containsRecursive(current.right, data);
                    }
                } */}
            </code></pre>
        </div>
        <br/>
        In this example, the Node class is the basic building block of the binary search tree, it has three fields: data, left, and right. The left field is a reference to the left child, and the right field is a reference to the right child. The BinarySearchTree class provides the basic functionality for adding and searching for nodes in the tree. The add() method creates the root node of the tree or it traverses the tree recursively in order to find the right position for the new node based on the BST property. The contains() method is to search the tree for the given key. <br/>
        Binary Search Trees are very efficient in searching for values in large sets of data. They offer an average time complexity of O(log n) for operations such as search, insert, and delete, making them well suited for applications such as searching large databases or searching for items in a dictionary. In the worst case scenario, for example, when the tree is skewed, the time complexity for these operations increases to O(n). <br/>
        Binary Search Trees have many other practical use cases, such as in sorting algorithms, implementing dictionary data structures, and finding the kth element in a set of data. <br/>
        Binary Search Tree have their own advantages and disadvantages as well. Some advantages are that they are very efficient in searching, inserting and deleting items. They also can be easily implemented using linked structures and dynamic memory allocation. Some disadvantages is that they can easily become unbalanced which can cause poor performance. To overcome this problem, Self-balancing binary search tree data structures like AVL Trees and Red-Black Trees are used. <br/>
        It's worth noting that, because of the efficient searching capabilities, the use of binary search trees is very common in many libraries, algorithms and computer science related applications. <br/>
       </>,
        image : {img}
    },
    {
        link : "avl-tree",
        title : "AVL Tree",
        content1 : <><b>An AVL tree (Adelson-Velsky and Landis tree) is a self-balancing binary search tree. It is a type of balanced tree where the difference in heights of the left and right subtrees of any node is at most one. It is named after its two Soviet inventors, Georgy Adelson-Velsky and Evgenii Landis. </b><br/>

        The main idea behind an AVL tree is to maintain the height balance property in a binary search tree. The idea is to check whether the height of left subtree and right subtree of any node differs by more than 1, if so the tree is rotated to restore its balance. There are four different types of rotations in AVL tree that are used to balance the tree. <br/><br/>
        Here's an example of a simple AVL tree implementation in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* class Node {
                    int data;
                    int height;
                    Node left;
                    Node right;

                    public Node(int data) {
                        this.data = data;
                        this.height = 1;
                    }
                }

                class AVLTree {
                    Node root;

                    public Node add(Node current, int data) {
                        if (current == null) {
                            return new Node(data);
                        }
                        if (data < current.data) {
                            current.left = add(current.left, data);
                        } else if (data > current.data) {
                            current.right = add(current.right, data);
                        } else {
                            return current;
                        }
                        current.height = 1 + Math.max(height(current.left), height(current.right));
                        int balance = getBalance(current);

                        if (balance > 1 && data < current.left.data) {
                            return rightRotate(current);
                        }
                        if (balance < -1 && data > current.right.data)
                            {
                            return leftRotate(current);
                        }
                        if (balance > 1 && data > current.left.data) {
                            current.left = leftRotate(current.left);
                            return rightRotate(current);
                        }
                        if (balance < -1 && data < current.right.data) {
                            current.right = rightRotate(current.right);
                            return leftRotate(current);
                        }
                        return current;
                    }
                    public int height(Node N) {
                        if (N == null) {
                            return 0;
                        }
                        return N.height;
                    }

                    public int getBalance(Node N) {
                        if (N == null) {
                            return 0;
                        }
                        return height(N.left) - height(N.right);
                    }

                    public Node rightRotate(Node y) {
                        Node x = y.left;
                        Node T2 = x.right;
                        x.right = y;
                        y.left = T2;
                        y.height = Math.max(height(y.left), height(y.right)) + 1;
                        x.height = Math.max(height(x.left), height(x.right)) + 1;
                        return x;
                    }

                    public Node leftRotate(Node x) {
                        Node y = x.right;
                        Node T2 = y.left;
                        y.left = x;
                        x.right = T2;
                        x.height = Math.max(height(x.left), height(x.right)) + 1;
                        y.height = Math.max(height(y.left), height(y.right)) + 1;
                        return y;
                    }
                } */}
            </code></pre>
        </div>
        <br/>
        In this example, the Node class is the basic building block of the AVL tree, it has four fields: data, height, left, and right. The height field is the height of the node and is used to maintain the balance of the tree. The add() method is used to add nodes to the tree and it automatically balances the tree using rotations if the height of the left and right subtrees of any node differs by more than 1. There are four different types: <br/>
        •	Left-left rotation (LL) <br/>
        •	Right-right rotation (RR) <br/>
        •	Left-right rotation (LR) <br/>
        •	Right-left rotation (RL) <br/>
        Each of these rotations is used to balance the tree when the difference in heights of the left and right subtrees of a node becomes greater than 1. The left rotate and right rotate methods perform these rotations. <br/>
        It is important to note that, because AVL tree are balanced, the height of the tree is always O(log n) which makes the search, insert, and delete operations very efficient. Also, as AVL Tree is a balanced tree, it guarantee that these operations are performed at an average case of O(log n). AVL tree are widely used in many applications where a balance is required such as real-time systems, databases and file systems. <br/>
        It is also worth noting that, AVL tree is not the only self-balancing binary search tree. There are other types of self-balancing binary search tree, such as red-black tree and splay tree, that guarantee similar performance and can be used depending on the specific use case and requirements of the application. <br/>
       </>,
        image : {img}
    },
    {
        link : "max-heap",
        title : "Max Heap",
        content1 : <><b>Content Missing... </b><br/><br/>

        The main idea behind an AVL tree is to maintain the height balance property in a binary search tree. The idea is to check whether the height of left subtree and right subtree of any node differs by more than 1, if so the tree is rotated to restore its balance. There are four different types of rotations in AVL tree that are used to balance the tree. <br/><br/>
        Here's an example of a simple AVL tree implementation in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                {/* class Node {
                    int data;
                    int height;
                    Node left;
                    Node right;

                    public Node(int data) {
                        this.data = data;
                        this.height = 1;
                    }
                }

                class AVLTree {
                    Node root;

                    public Node add(Node current, int data) {
                        if (current == null) {
                            return new Node(data);
                        }
                        if (data < current.data) {
                            current.left = add(current.left, data);
                        } else if (data > current.data) {
                            current.right = add(current.right, data);
                        } else {
                            return current;
                        }
                        current.height = 1 + Math.max(height(current.left), height(current.right));
                        int balance = getBalance(current);

                        if (balance > 1 && data < current.left.data) {
                            return rightRotate(current);
                        }
                        if (balance < -1 && data > current.right.data)
                            {
                            return leftRotate(current);
                        }
                        if (balance > 1 && data > current.left.data) {
                            current.left = leftRotate(current.left);
                            return rightRotate(current);
                        }
                        if (balance < -1 && data < current.right.data) {
                            current.right = rightRotate(current.right);
                            return leftRotate(current);
                        }
                        return current;
                    }
                    public int height(Node N) {
                        if (N == null) {
                            return 0;
                        }
                        return N.height;
                    }

                    public int getBalance(Node N) {
                        if (N == null) {
                            return 0;
                        }
                        return height(N.left) - height(N.right);
                    }

                    public Node rightRotate(Node y) {
                        Node x = y.left;
                        Node T2 = x.right;
                        x.right = y;
                        y.left = T2;
                        y.height = Math.max(height(y.left), height(y.right)) + 1;
                        x.height = Math.max(height(x.left), height(x.right)) + 1;
                        return x;
                    }

                    public Node leftRotate(Node x) {
                        Node y = x.right;
                        Node T2 = y.left;
                        y.left = x;
                        x.right = T2;
                        x.height = Math.max(height(x.left), height(x.right)) + 1;
                        y.height = Math.max(height(y.left), height(y.right)) + 1;
                        return y;
                    }
                } */}
            </code></pre>
        </div>
        <br/>
        In this example, the Node class is the basic building block of the AVL tree, it has four fields: data, height, left, and right. The height field is the height of the node and is used to maintain the balance of the tree. The add() method is used to add nodes to the tree and it automatically balances the tree using rotations if the height of the left and right subtrees of any node differs by more than 1. There are four different types: <br/>
        •	Left-left rotation (LL) <br/>
        •	Right-right rotation (RR) <br/>
        •	Left-right rotation (LR) <br/>
        •	Right-left rotation (RL) <br/>
        Each of these rotations is used to balance the tree when the difference in heights of the left and right subtrees of a node becomes greater than 1. The left rotate and right rotate methods perform these rotations. <br/>
        It is important to note that, because AVL tree are balanced, the height of the tree is always O(log n) which makes the search, insert, and delete operations very efficient. Also, as AVL Tree is a balanced tree, it guarantee that these operations are performed at an average case of O(log n). AVL tree are widely used in many applications where a balance is required such as real-time systems, databases and file systems. <br/>
        It is also worth noting that, AVL tree is not the only self-balancing binary search tree. There are other types of self-balancing binary search tree, such as red-black tree and splay tree, that guarantee similar performance and can be used depending on the specific use case and requirements of the application. <br/>
       </>,
        image : {img}
    },
];