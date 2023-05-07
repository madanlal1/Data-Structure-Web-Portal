import '../css/style.css';

import img from '../images/first.gif';
import _1darray from '../thumbnails/_1darray.gif'; 
import _2darray from '../thumbnails/_2darray.gif'; 
import binary_search_tree from '../thumbnails/binary_search_tree.gif'; 
import binary_tree from '../thumbnails/binary_tree.gif'; 
import circular_singly_linkedlist from '../thumbnails/circular_singly_linkedlist.gif'; 
import circular_doubly_linkedlist from '../thumbnails/circular_doubly_linkedlist.gif'; 
import doubly_linkedlist from '../thumbnails/doubly_linkedlist.gif'; 
import singly_linkedlist from '../thumbnails/singly_linkedlist.gif'; 
import queue from '../thumbnails/queue.gif'; 
import stack from '../thumbnails/stack.gif'; 
import tree from '../thumbnails/tree.gif'; 
import bubble_sort from '../thumbnails/bubble_sort.gif'; 
import bfs from '../thumbnails/bfs.gif'; 
import dfs from '../thumbnails/dfs.gif'; 
import pre_order from '../thumbnails/pre_order.gif'; 
import in_order from '../thumbnails/in_order.gif'; 
import post_order from '../thumbnails/post_order.gif'; 
import insertion_sort from '../thumbnails/insertion_sort.gif'; 
import quick_sort from '../thumbnails/quick_sort.gif'; 
import selection_sort from '../thumbnails/selection_sort.gif'; 
import merge_sort from '../thumbnails/merge_sort.gif'; 
import recursion from '../thumbnails/recursion.gif'; 
import min_heap from '../thumbnails/min_heap.gif'; 
import max_heap from '../thumbnails/max_heap.gif'; 
import avl_tree from '../thumbnails/avl_tree.gif';
import hashing from '../thumbnails/hashing.gif';
import priority_queue from '../thumbnails/priority_queue.gif';
import data_structure from '../thumbnails/data_structure.gif';
import radix_sort from '../thumbnails/radix_sort.gif'; 
import adjacency_list_graph from '../thumbnails/adjacency_list_graph.gif';
import adjacency_Matrix_graph from '../thumbnails/adjacency_Matrix_graph.gif';
import linear_probing_hashing from '../thumbnails/linear_probing_hashing.gif';
import quardatic_probing_hashing from '../thumbnails/quardatic_probing_hashing.gif';
import separate_chaining_hashing from '../thumbnails/separate_chaining_hashing.gif';
import array from '../thumbnails/array.gif';
import linkedlist from '../thumbnails/linkedlist.gif';
import graph from '../thumbnails/graph.gif';
import spaceComplexity from '../thumbnails/space_complexity.gif';
import timeComplexity from '../thumbnails/time_complexity.gif';


const _datastructure = 'bzSKawdzbCw';
const _1d_array = 'lIXV_hHdokg';
const _2d_array = 'IVmZUiY74DQ';
const _singlyLinkedList = 'OjhiiIea8X8';
const _circularSinglyLinkedList = 'Hbw3tpVlv5A';
const _doublyLinkedList = 'vZ39fSso49g';
const _circularDoublyLinkedList = 'DrATf9rtfoE';
const _queue = 'agQQyKd0HBQ';
const _priorityQueue = '-D6JYBrVrhs';
const _stack = '-qsKQVpGPKs';
const _recursion = 'ucQe21ha2K8';
const _tree = 'RASniJbiWaE';
const _binaryTree = '_ITudD2Cz9M';
const _binarySearchTree = 'ymGjUOiR8Jg';
const _avlTree = 'xGIEbjGyPm0';
const _maxHeap = 'uU0iWaVxMgc';
const _minHeap = 'AFPzC2RJOMk';
const _preOrder = 'gLx7Px7IEzg';
const _inOrder = 'ne5oOmYdWGw';
const _postOrder = 'a8kmbuNm8Uo';
const _bubbleSort = 'Twpo1-8--6M';
const _quickSort = '4vc5OYLMcYE';
const _selectionSort = 'ouAHgfPGdEg';
const _insertionSort = 'g7nYRpfP7lg';
const _mergeSort = 'spVhtO_IcGg';
const _radixSort = 'Om4BljCs_qE';
const _hashing = 'VeYKEMY2F9k';
const _linearProbing = '98Y0UDZ9vvs';
const _quadraticProbing = '0CFJAkpnhBg';
const _separateChaining = 'LRtKQdsJC3o';
const _adjacencyList = 'sf17xiYfLcM';
const _adjacencyMatrix = 'xNaYt6d1RI4';
const _bfs = 'QUfEOCOEKkc';
const _dfs = '3_NMDJkmvLo';
const _array = 'HQUVGMjzFwI';
const _linkedlist = 'DRHyY0Ihu90';
const _sorting = 'Boxjvcs1mzo';
const _graph = 'uKebVkM77ww';
const _timeComplexity = 'IA8On-kfxYo';
const _spaceComplexity = 'izZRQkC8BNU';


function copyToClipboard(id = 'code-snippet') {
    console.log("id >> ",id)
    const codeSnippet = document.querySelector(`#${id}`).innerText;
    navigator.clipboard.writeText(codeSnippet)
      .then(() => alert('Code snippet copied to clipboard!'))
      .catch(() => alert('Failed to copy code snippet to clipboard.'));
  }

<h1 id='code-snippet'>HELLO</h1>

export const Data = [
    {
        video : _datastructure,
        link : "data-structure",
        title : "Data Structure",
        image : data_structure,
        content1 : <><b>A data structure is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. Different types of data structures are suited to different kinds of applications, and some are highly specialized to specific tasks.</b><br/><br/> <b>Here are some examples of common data structures: </b><br/><br/>

        <strong>Arrays:</strong> An array is a collection of items stored at contiguous memory locations. The items can be of the same type or of different types.<br/>
        
        <strong>Linked Lists:</strong> A linked list is a collection of items that are stored in a linear fashion and linked together using pointers.<br/>
        
        <strong>Stacks:</strong> A stack is a linear data structure that follows the Last In, First Out (LIFO) principle.<br/>
        
        <strong>Queues:</strong> A queue is a linear data structure that follows the First In, First Out (FIFO) principle.<br/>
        
        <strong>Trees:</strong> A tree is a non-linear data structure that consists of nodes connected by edges. It is often used to represent hierarchical relationships.<br/>
        
        <strong>Graphs:</strong> A graph is a non-linear data structure that consists of a set of vertices (nodes) and a set of edges connecting the vertices.<br/>
        
        <strong>Hash Tables:</strong> A hash table is a data structure that stores data in an associative array, which is a collection of key-value pairs.<br/><br/>
        
        These are just a few examples of common data structures. There are many others as well, each with its own set of characteristics and uses.</>,
    },
    {
        video : _array,
        link : "array",
        title : "Array",
        image : array,
        content1 : <><b>An array is a data structure that stores a collection of elements, which are accessed by their position or index. Each element in the array is identified by an index, which is an integer value that ranges from 0 to the size of the array minus 1.</b><br/><br/><br/>

        Here's an example of an array of integers in Java:<br/><br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet1')}>Copy</button>
            <pre><code id="code-snippet1">
                {`int[] numbers = {1, 2, 3, 4, 5}; 
                System.out.println(numbers[2]); `}
            </code></pre>
        </div>
        <br/>
            In this example, numbers is an array of integers with 5 elements. Like the examples before, we can access individual elements of the array by using square brackets and the index of the element we want to access. <br/>
            You can also create an array by specifying the size and type, like this:
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet2')}>Copy</button>
            <pre><code id="code-snippet2">
                {`int[] numbers = new int[5]; `}
            </code></pre>
        </div>
        <br/>
        This creates an empty array of integers with a length of 5, which means it can store 5 elements. You can then add elements to the array by using the assignment operator and specifying the index, like this: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet3')}>Copy</button>
            <pre><code id="code-snippet3">
                {`numbers[0] = 1; 
                numbers[1] = 2; `}
            </code></pre>
        </div>
        <br/>
        You can also use a loop to initialize the array
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet4')}>Copy</button>
            <pre><code id="code-snippet4">
                {`for (int i = 0; i < numbers.length; i++) { 
                    numbers[i] = i; 
                }`}
            </code></pre>
        </div>
        <br/>
        Java also provides a class called ArrayList which allows you to create resizable array in a more dynamic way, where you can add and remove elements to the array dynamically, instead of having a fixed size like normal arrays. Here is an example of how to use an ArrayList: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet5')}>Copy</button>
            <pre><code id="code-snippet5">
            {`import java.util.ArrayList; 

            ArrayList<Integer> numbers = new ArrayList<Integer>(); 
            uncomment array list above... 
            numbers.add(1); 
            numbers.add(2); 
            numbers.add(3); 
            numbers.remove(1); // removes the element at index 1 `}
            </code></pre>
        </div>
        <br/>
        It's important to note that, like in most programming languages, arrays are 0-indexed in Java, meaning that the first element has an index of 0, the second element has an index of 1, and so on.
        <br/>
       </>
    },
    {
        video : _1d_array,
        link : "1d-array",
        title : "1D Array",
        image : _1darray,
        content1 : <><b>A one-dimensional (1D) array is a type of array that has only one dimension, and stores a linear collection of elements. Each element in a 1D array is accessed by its index, which is an integer value representing the position of the element in the array. </b><br/><br/>

        In Java, a 1D array can be declared and initialized in several ways:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet6')}>Copy</button>
            <pre>
                <code id="code-snippet6">
                    
                {`// Declare and initialize an array using the array initializer
                int[] numbers = {1, 2, 3, 4, 5};

                // Declare an array and then initialize its elements individually
                int[] numbers = new int[5];
                numbers[0] = 1;
                numbers[1] = 2;
                numbers[2] = 3;
                numbers[3] = 4;
                numbers[4] = 5;

                // Declare and initialize an array using a for loop
                int[] numbers = new int[5];
                for (int i = 0; i < numbers.length; i++) {
                    numbers[i] = i;
                }`}
                
            </code></pre>
        </div>
        <br/>
        In these examples, numbers is a 1D array of integers with 5 elements. As previously mentioned, you can access individual elements of the array by using square brackets and the index of the element you want to access, like this: 
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet7')}>Copy</button>
            <pre><code id="code-snippet7">
                {`System.out.println(numbers[2]);`}
            </code></pre>
        </div>
        <br/>
        This will print the element at the index 2 of the array, which is 3. <br/>
        1D arrays are useful when you need to store a collection of similar elements that can be accessed by an integer index, such as a list of student grades, a list of temperatures, or a list of stock prices. They are also useful as function arguments, so you can pass an array of values to a function and manipulate them inside that function. <br/>
        It's worth noting that there's also another way of creating 1D array in Java through the use of Array class, for example: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet8')}>Copy</button>
            <pre><code id="code-snippet8">
                {`int[] numbers = Array.of(1, 2, 3, 4, 5); <br/>`}
            </code></pre>
        </div>
        <br/>
        This is a new feature from Java 9, it allows to create arrays in a more concise way, and it is also type-safe. <br/>
       </>,
    },
    {
        video : _2d_array,
        link : "2d-array",
        title : "2D Array",
        image : _2darray,
        content1 : <><b>A two-dimensional (2D) array is an array that has two dimensions, and stores a grid of elements. Each element in a 2D array is accessed by its row and column indices, which are integer values representing the position of the element in the grid.</b><br/><br/>

        In Java, a 2D array is actually an array of arrays, and can be declared and initialized in several ways:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet9')}>Copy</button>
            <pre><code id="code-snippet9">
                {`// Declare and initialize a 2D array using the array initializer
                {/* int[][] matrix = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} }; */}

                // Declare a 2D array and then initialize its elements individually
                int[][] matrix = new int[3][3];
                matrix[0][0] = 1;
                matrix[0][1] = 2;
                matrix[0][2] = 3;
                matrix[1][0] = 4;
                matrix[1][1] = 5;
                matrix[1][2] = 6;
                matrix[2][0] = 7;
                matrix[2][1] = 8;
                matrix[2][2] = 9;
 
                // Declare and initialize a 2D array using nested for loops
                int[][] matrix = new int[3][3];
                for (int i = 0; i < matrix.length; i++) {
                    for (int j = 0; j < matrix[i].length; j++) {
                        matrix[i][j] = i * 3 + j + 1;
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        In these examples, matrix is a 2D array of integers with 3 rows and 3 columns. You can access individual elements of the array by using two sets of square brackets, one for the row and one for the column, like this: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet10')}>Copy</button>
            <pre><code id="code-snippet10">
            {`System.out.println(matrix[1][1]); <br/>`}
            </code></pre>
        </div>
        <br/>
        This will print the element at the position 1,1 of the matrix, which is 5. <br/>
        2D arrays are useful for storing data that has a logical structure, like a table of data, a chess board, a map, etc, They also can be used to store images and other types of data that have a 2D structure. <br/>
        It's worth mentioning that, like with 1D arrays, you can use Array class introduced in Java 9 to create 2D arrays: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet11')}>Copy</button>
            <pre><code id="code-snippet11">
            {`int[][] matrix = Array.of(Array.of(1, 2, 3), Array.of(4, 5, 6), Array.of(7, 8, 9)); `}
            </code></pre>
        </div>
        <br/>
        This creates a 2D array in a more concise and type-safe way. <br/>
       </>,
    },
    {
        video : _linkedlist,
        link : "linkedlist",
        title : "Linked List",
        image : linkedlist,
        content1 : <><b>A linked list is a data structure that stores a collection of elements, called nodes, in which each node points to the next node in the list. It is a dynamic data structure, meaning that the number of elements in a linked list can change during the program's execution.</b><br/><br/>

        In Java, you can use a class and object-oriented programming to create a linked list. You can create a class called Node that will represent a node in the linked list. The class would typically have two fields: data, which stores the value of the element, and next, which stores a reference to the next node in the list.<br/><br/>
        Here's an example of how you might declare a basic linked list node in Java:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet12')}>Copy</button>
            <pre><code id="code-snippet12">
                {`class Node {
                    int data;
                    Node next;
                    public Node(int data) {
                        this.data = data;
                        this.next = null;
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        In this example, the Node class contains two fields: an int field named data that stores the element's value and a Node field named next that points to the next element in the list. <br/>
        A linked list is typically composed of multiple nodes that are linked together, with each node pointing to the next node in the list. The last node in the list points to null indicating the end of the list. <br/><br/>
        Here is an example of how you might create a basic linked list in Java: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet13')}>Copy</button>
            <pre><code id="code-snippet13">
                {`Node head = new Node(10);
                Node second = new Node(20);
                Node third = new Node(30);
                head.next = second;
                second.next = third;`}
            </code></pre>
        </div>
        <br/>
        In this example, we created three nodes and linked them together, forming a list with three elements: 10, 20, and 30. The variable head points to the first element of the list, which has a value of 10. The second element, which has a value of 20, is located at the address stored in head.next, and so on. <br/>
        Java already has a built-in class for linked lists called LinkedList, it implements the List interface and you can use it without the need of creating your own LinkedList class. <br/>
       </>,
    },
    {
        video : _singlyLinkedList,
        link : "singly-linkedlist",
        title : "Singly Linked List",
        image : singly_linkedlist,
        content1 : <><b>A singly linked list is a data structure that consists of a chain of nodes, where each node contains an element and a reference to the next node in the list. The first node is called the head of the list, and the last node points to null, indicating the end of the list. The list has no reference to previous node, hence called Singly Linked List.</b><br/><br/>

        In Java, you can implement a singly linked list using a class that defines a Node and a LinkedList class. Here's an example of a simple singly linked list implementation in Java:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet14')}>Copy</button>
            <pre><code id="code-snippet14">
                {`class Node { 
                    int data; 
                    Node next; 

                    public Node(int data) { 
                        this.data = data; 
                    } 
                } 
 
                class LinkedList { 
                    Node head; 

                    public void append(int data) { 
                        if (head == null) { 
                            head = new Node(data); 
                            return; 
                        } 

                        Node current = head; 
                        while (current.next != null) { 
                            current = current.next; 
                        } 

                        current.next = new Node(data); 
                    } 

                    public void prepend(int data) { 
                        Node newHead = new Node(data); 
                        newHead.next = head; 
                        head = newHead; 
                    } 

                    public void delete(int data) { 
                        if (head == null) { 
                            return; 
                        } 

                        if (head.data == data) { 
                            head = head.next; 
                            return; 
                        } 

                        Node current = head; 
                        while (current.next != null) { 
                            if (current.next.data == data) { 
                                current.next = current.next.next; 
                                return; 
                            } 
                            current = current.next; 
                        } 
                    } 
                } `}
            </code></pre>
        </div>
        <br/>
        This implementation includes basic operations like insertions(append and prepend) and deletion of an element in the linked list. <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet15')}>Copy</button>
            <pre><code id="code-snippet15">
            {`LinkedList list = new LinkedList(); 
            list.append(1); 
            list.append(2); 
            list.append(3); 
            list.prepend(0); 
            list.delete(2); `}
            </code></pre>
        </div>
        <br/>
        In this example, we are creating a new list and adding elements to it using append() and prepend() methods, and deleting an element using the delete() method. The singly linked list can also be traversed by starting from the head node, and following the next references until the end of the list. <br/>
        It is worth noting that, there are other types of linked list like circular linked list, doubly linked list etc, with different characteristics and trade offs depending on the use case, but singly linked list has the lowest overhead among all of them. <br/>
       </>,
    },
    {
        video : _doublyLinkedList,
        link : "doubly-linkedlist",
        title : "Doubly Linked List",
        image : doubly_linkedlist,
        content1 : <><b>A doubly linked list is similar to a singly linked list, but each node contains an additional reference to the previous node in the list, as well as the next node. This allows for more flexibility when traversing the list, as you can traverse it in either direction (forward or backward) .</b><br/><br/>

        Here's an example of a simple doubly linked list implementation in Java:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet16')}>Copy</button>
            <pre><code id="code-snippet16">
                {`class Node { 
                    int data; 
                    Node next; 
                    Node prev; 
                
                    public Node(int data) { 
                        this.data = data; 
                    } 
                } 

                class DoublyLinkedList { 
                    Node head; 
                    Node tail; 
                 
                    public void append(int data) { 
                        Node newNode = new Node(data); 
                        if (head == null) { 
                            head = newNode; 
                            tail = newNode; 
                            return; 
                        } 
                        tail.next = newNode; 
                        newNode.prev = tail; 
                        tail = newNode; 
                    } 

                    public void prepend(int data) { 
                        Node newNode = new Node(data); 
                        newNode.next = head; 
                        head.prev = newNode; 
                        head = newNode; 
                    } 
                    
                    public void delete(int data) { 
                        if (head == null) { 
                            return; 
                        } 
                        if (head.data == data) { 
                            head = head.next; 
                            head.prev = null; 
                            return; 
                        } 
                        Node current = head; 
                        while (current != null) { 
                            if (current.data == data) { 
                                current.prev.next = current.next; 
                                if (current.next != null) { 
                                    current.next.prev = current.prev; 
                                } else { 
                                    tail = current.prev; 
                                } 
                                return; 
                            } 
                            current = current.next; 
                        } 
                    } 
                }  `}
            </code></pre>
        </div>
        <br/>
        In this example, DoublyLinkedList class has 3 main operations: append, prepend and delete. The append() and prepend() method insert elements in the linked list, and delete() method deletes the element passed to it. The tail reference is used to keep track of the last element in the list, which allows for O(1) append operations. <br/>
        As you can see, the doubly linked list implementation has more complexity than singly linked list, since it needs to maintain a reference to both the previous and next nodes, but the extra complexity also allows for more flexibility when traversing the list and for some operations to have O(1) time complexity like deletion and insertion at the end of the list. <br/>
        It's important to note that, depending on the use case and the operations needed, either a singly or doubly linked list can be more appropriate. It is important to weigh the trade-offs and choose the implementation that best fits your needs. <br/>
       </>,
    },
    {
        video : _circularSinglyLinkedList,
        link : "circular-singly-linkedlist",
        title : "Circular Singly Linked List",
        image : circular_singly_linkedlist,
        content1 : <><b>A circular singly linked list is a variation of the singly linked list where the last node in the list points back to the first node, forming a loop. It's called circular because of this looping behavior. A circular linked list can be either a circular singly linked list or a circular doubly linked list.</b><br/><br/>

        Here's an example of a simple circular singly linked list implementation in Java:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet17')}>Copy</button>
            <pre><code id="code-snippet17">
                {`class Node { 
                    int data; 
                    Node next; 

                    public Node(int data) { 
                        this.data = data; 
                    } 
                } 

                class CircularLinkedList { 
                    Node head; 

                    public void append(int data) { 
                        if (head == null) { 
                            head = new Node(data); 
                            head.next = head; 
                            return; 
                        } 

                        Node current = head; 
                        while (current.next != head) { 
                            current = current.next; 
                        } 

                        Node newNode = new Node(data); 
                        newNode.next = head; 
                        current.next = newNode; 
                    } 
                    // the other methods like delete, insert, etc can be implemented similar to the singly linked list 
                }`}
            </code></pre>
        </div>
        <br/>
        In this example, CircularLinkedList class has an append() method to insert elements in the linked list, and other operations like delete, insert etc can be implemented similarly as the singly linked list. The key difference here is that, when the last node is reached, it points back to the head of the list, forming a loop. <br/>
        Circular linked list are used in scenarios where a list needs to be circular, a common use case is when the list is used as a buffer and new items are added to the front while oldest items are removed from the back. Other use cases are in the implementation of certain algorithms such as cycle detection in a graph. <br/>
        It's important to note that traversing a circular linked list requires extra care, to avoid infinite loops, a technique like marking nodes as visited is used, or to keep a counter for the number of nodes visited. <br/>
       </>,
    },
    {
        video : _circularDoublyLinkedList,
        link : "circular-doubly-linkedlist",
        title : "Circular Doubly Linked List",
        image : circular_doubly_linkedlist,
        content1 : <><b>A circular doubly linked list is similar to a circular singly linked list, but it has an additional reference to the previous node in addition to the next node in the list. This allows for more flexibility when traversing the list in either direction, but also increases the complexity of the implementation. </b><br/><br/>

        Here's an example of a simple circular doubly linked list implementation in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet18')}>Copy</button>
            <pre><code id="code-snippet18">
                {`class Node { 
                    int data; 
                    Node next; 
                    Node prev; 

                    public Node(int data) { 
                        this.data = data; 
                    } 
                } 

                class CircularDoublyLinkedList { 
                    Node head; 
                
                    public void append(int data) { 
                        Node newNode = new Node(data); 
                        if (head == null) { 
                            head = newNode; 
                            head.next = head; 
                            head.prev = head; 
                            return; 
                        } 
                        newNode.prev = head.prev; 
                        newNode.next = head; 
                        head.prev.next = newNode; 
                        head.prev = newNode; 
                    } `}
            </code></pre>
        </div>
        <br/>
       </>,
    },
    {
        video : _queue,
        link : "queue",
        title : "Queue",
        image : queue,
        content1 : <><b>A queue is a data structure that follows the First-In-First-Out (FIFO) principle, which means that the first element added to the queue will be the first one to be removed. It's often referred to as a "waiting line" or a "line of customers" where customers are added at the back of the queue and served from the front of the queue. </b><br/>

        In Java, you can implement a queue using an array or a linked list, but the most commonly used implementation is using an array along with two variables: the head and the tail indices. <br/><br/>
        Here's an example of a simple queue implementation using an array in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet19')}>Copy</button>
            <pre><code id="code-snippet19">
               {` class Queue { 
                    int[] items; 
                    int head; 
                    int tail; 

                    public Queue(int capacity) { 
                        items = new int[capacity]; 
                    } 

                    public void enqueue(int item) { 
                        if (tail == items.length) { 
                            if (head == 0) { 
                                System.out.println("Queue is full"); 
                                return; 
                            } 
                            // shift elements to the left to remove the head 
                            for (int i = head; i < tail; i++) { 
                                items[i - head] = items[i]; 
                            } 
                            tail = tail - head; 
                            head = 0; 
                        } 
                        items[tail++] = item; 
                    } 

                    public int dequeue() { 
                        if (head == tail) { 
                            System.out.println("Queue is empty"); 
                            return -1; 
                        } 
                        return items[head++]; 
                    } 
                } `}
            </code></pre>
        </div>
        <br/>
        In this implementation, the Queue class has three instance variables: an int array called items which stores the elements in the queue, head variable that stores the index of the front element of the queue, and tail variable that stores the index of the next available position in the array. The enqueue() method adds an element to the tail of the queue and the dequeue() method removes the element from the head of the queue. <br/><br/>
        This is just one example of how you can implement a queue in Java, other examples include using a singly linked list, a doubly linked list, and using the pre-built Queue class in Java collections framework. The pre-built classes in Java collections framework such as ArrayDeque, LinkedList can be used as a queue as well, they have the same behavior as described above and they are thread-safe and resizable. <br/>
       </>,
    },
    {
        video : _priorityQueue,
        link : "priority-queue",
        title : "Priority Queue",
        image : priority_queue,
        content1 : <><b>A priority queue is a special type of queue where each element has a priority associated with it. In a priority queue, an element with a high priority is dequeued before an element with a low priority. If two elements have the same priority, they are served according to their order in the queue. It can also be implemented as a min heap or max heap, where the smallest or the largest element respectively is at the top of the heap. </b><br/>

        In Java, there is a pre-built PriorityQueue class in the java.util package that implements a priority queue using a min-heap. Here's an example of how you can use the PriorityQueue class to create a priority queue and add elements to it: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet20')}>Copy</button>
            <pre><code id="code-snippet20">
                {`PriorityQueue<Integer> pq = new PriorityQueue<Integer>(); 
                pq.add(3); 
                pq.add(1); 
                pq.add(2); `}
            </code></pre>
        </div>
        <br/>
        In this example, a priority queue is created, and three elements are added to it. Since the PriorityQueue class uses a min-heap, the element with the lowest value will be at the head of the queue. When you call poll() function to dequeue element it will remove the element which has the lowest priority. <br/><br/>
        You can also use a Comparator while creating a priority queue to define the priority of elements in the queue: <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet21')}>Copy</button>
            <pre><code id="code-snippet21">
                {`PriorityQueue<Integer> pq = new PriorityQueue<Integer>(new Comparator<Integer>() { 
                    public int compare(Integer a, Integer b) { 
                    return b - a; 
                } 
            }); `}
            </code></pre>
        </div>
        <br/>
        This will create a max-heap where the element with the highest value will be at the head of the queue. <br/>
        Priority Queue can be used in the scenarios where the elements need to be processed based on their priority, for example in Dijkstra's Algorithm for shortest path, Huffman coding for data compression, Prim's algorithm for finding Minimum Spanning Tree, etc. <br/>
        It is important to note that, a priority queue can have multiple solutions, it depends on how the priority is defined and on the use case. In some cases a min heap might be more appropriate, in other cases a max heap. <br/>
       </>,
    },
    {
        video : _stack,
        link : "stack",
        title : "Stack",
        image : stack,
        content1 : <><b>A stack is a data structure that follows the Last-In-First-Out (LIFO) principle, which means that the last element added to the stack will be the first one to be removed. It's often visualized as a "vertical stack" of elements, with the most recent element added at the top and the oldest element at the bottom. </b><br/>

        In Java, you can implement a stack using an array or a linked list, but the most commonly used implementation is using an array along with an integer variable called top to keep track of the index of the top of the stack. <br/><br/>
        Here's an example of a simple stack implementation using an array in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet22')}>Copy</button>
            <pre><code id="code-snippet22">
                {`class Stack {
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
                }`}
            </code></pre>
        </div>
        <br/>
        In this implementation, the Stack class has two instance variables: an int array called items which stores the elements in the stack, and top variable that stores the index of the top of the stack. The push() method adds an element to the top of the stack and the pop() method removes the element from the top of the stack. <br/>
        This is just one example of how you can implement a stack in Java, other examples include using a singly linked list, a doubly linked list and using the pre-built Stack class in Java collections framework. <br/>
        It's important to note that, Stack data structure can be used in many algorithms such as the undo-redo feature in a text editor, matching brackets in a code, evaluation of postfix expressions, in the implementation of certain algorithms such as Depth First Search and in many other use cases. <br/>
       </>,
    },
    {
        video : _timeComplexity,
        link : "time-complexity",
        title : "Time Complexity",
        image : timeComplexity,
        content1 : <><b>Time complexity is a measure of how long an algorithm takes to run as a function of the size of the input. It's often represented using big O notation, which expresses the upper bound of the running time of an algorithm. </b><br/>

        The time complexity of an algorithm can be determined by counting the number of basic operations the algorithm performs. For example, if an algorithm requires a constant number of operations regardless of the size of the input, its time complexity is O(1). If the number of operations grows linearly with the size of the input, the time complexity is O(n), where n is the size of the input. <br/><br/>
        Here are a few examples of time complexity in Java: <br/>
        <b>Linear search:</b> The time complexity of linear search algorithm is O(n), where n is the size of the input array. This is because in the worst case, the algorithm has to iterate through the entire array to find the element. Here's an example of linear search in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet23')}>Copy</button>
            <pre><code id="code-snippet23">
                {`public static int linearSearch(int[] array, int key) {
                    for (int i = 0; i < array.length; i++) {
                        if (array[i] == key) {
                            return i;
                        }
                    }
                    return -1;
                }`}
            </code></pre>
        </div>
        <br/>
        <b>Binary search: </b> The time complexity of binary search algorithm is O(log n), where n is the size of the input array. This is because in each step of the algorithm, it eliminates half of the remaining possibilities. Here's an example of binary search in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet24')}>Copy</button>
            <pre><code id="code-snippet24">
                {`public static int binarySearch(int[] array, int key) {
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
                }`}
            </code></pre>
        </div>
        <br/>
        <b>Bubble sort:  </b> The time complexity of bubble sort algorithm is O(n^2) in the worst case and average case. This is because for each element, the algorithm has to compare it with all other elements and swap them if necessary. Here's an example of bubble sort in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet25')}>Copy</button>
            <pre><code id="code-snippet25">
                {`public static void bubbleSort(int[] array) {
                    for (int i = 0; i < array.length - 1; i++) {
                        for (int j = 0; j < array.length - i - 1; j++) {
                            if (array[j] > array[j + 1]) {
                                int temp = array[j];
                                array[j] = array[j + 1];
                                array[j + 1] = temp;
                            }
                        }
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        The time complexity analysis for an algorithm is important because it can help you to choose the most efficient algorithm for a given task, especially when the size of the input data is large. It's worth noting that, the time complexity of an algorithm can change with the implementation and the best case, worst case, average case all can have different time complexities. <br/>
       </>,
    },
    {
        video : _spaceComplexity,
        link : "space-complexity",
        title : "Space Complexity",
        image : spaceComplexity,
        content1 : <><b>Space complexity is a measure of how much memory an algorithm uses as a function of the size of the input. Like time complexity, space complexity is often represented using big O notation. </b><br/>

        The space complexity of an algorithm can be determined by counting the amount of memory used by the algorithm, including memory used by the program itself, memory used by any data structures, and memory used for any temporary variables. <br/><br/>
        Here are a few examples of space complexity in Java: <br/>
        <b>Linear search:</b> The space complexity of linear search algorithm is O(1), as it only uses a few variables like an index variable i, and key variable. Here's an example of linear search in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet26')}>Copy</button>
            <pre><code id="code-snippet26">
                {`public static int linearSearch(int[] array, int key) {
                    for (int i = 0; i < array.length; i++) {
                        if (array[i] == key) {
                            return i;
                        }
                    }
                    return -1;
                }`}

            </code></pre>
        </div>
        <br/>
        <b>Recursive fibonacci:  </b> The space complexity of the recursive fibonacci algorithm is O(n), where n is the input number. In the worst case it calls fibonacci(n-1) and fibonacci(n-2) so the amount of memory required increases by a multiple of 2 on each call, as each level of recursion requires a new stack frame. Here's an example of recursive fibonacci in Java:  <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet27')}>Copy</button>
            <pre><code id="code-snippet27">
                {`public static int fibonacci(int n) {
                    if (n <= 1) {
                        return n;
                    }
                    return fibonacci(n-1) + fibonacci(n-2);
                }`}
            </code></pre>
        </div>
        <br/>
        <b>Merge sort:</b> The space complexity of the merge sort algorithm is O(n) in the worst case and average case, as it requires a temporary array to merge the sorted sub-arrays. Here's an example of merge sort in Java:<br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet28')}>Copy</button>
            <pre><code id="code-snippet28">
                {`public static void mergeSort(int[] array) {
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
                }`}
            </code></pre>
        </div>
        <br/>
        It's worth noting that the space complexity of merge sort is independent of the sorting order and is same for both best, worst and average cases. <br/>
        Space complexity is an important aspect of an algorithm because it can be a limiting factor when working with large inputs or when working in a memory-constrained environment. It's good practice to always consider the space complexity of an algorithm while designing and evaluating them. <br/>
       </>,
    },
    {
        video : _recursion,
        link : "recursion",
        title : "Recursion",
        image : recursion,
        content1 : <><b>Recursion is a programming technique where a function calls itself in order to solve a problem. In a recursive function, the problem is divided into one or more smaller subproblems, each of which is solved by calling the function again with modified input. Eventually, the function reaches a base case, which is a condition that stops the recursion, and the function returns a value or solution to the original problem. </b><br/>

        Here's an example of a simple recursive function in Java that calculates the factorial of a given number: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet29')}>Copy</button>
            <pre><code id="code-snippet29">
                {`public static int factorial(int n) {
                    if (n == 0) {
                        return 1;
                    }
                    return n * factorial(n - 1);
                }`}
            </code></pre>
        </div>
        <br/>
        In this example, the factorial function takes an integer n as input, and it checks if n is equal to 0. If it is, it returns 1, which is the base case of the recursion. If n is not equal to 0, the function returns n multiplied by the factorial of n-1, which is calculated by calling the function again with input n-1. <br/>
        Recursive function can be useful when the problem at hand can be broken down into subproblems that are similar in nature to the original problem. Examples of such problems include traversing a tree or a graph data structure, finding the nth Fibonacci number and solving mathematical problems like the Tower of Hanoi problem. <br/>
        It's important to note that not all problems can be solved using recursion and it requires careful design and implementation to avoid infinite loops and stack overflow. Also, recursive function might use more memory because of stack overflow and it could be less efficient than iterative function. But in some cases recursive function might be more readable and easy to understand then iterative version. <br/>
       </>,
    },
    {
        video : _tree,
        link : "trees",
        title : "Trees",
        image : tree,
        content1 : <><b>A tree is a non-linear data structure that simulates a hierarchical structure with a set of connected nodes. A tree consists of a set of nodes and edges that connect them. Each node, also called a vertex, can have zero or more child nodes, but it has only one parent node, except for the root node, which has no parent. The topmost node in the tree is called the root node, and the nodes that don't have any child nodes are called leaf nodes. </b><br/>

        There are different types of trees like binary tree, binary search tree, AVL tree, B-tree etc. <br/><br/>
        Here's an example of a simple binary tree implementation in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet30')}>Copy</button>
            <pre><code id="code-snippet30">
                {`class Node {
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
                }`}
            </code></pre>
        </div>
        <br/>
        In this example, the Node class is the basic building block of the binary tree, it has three fields: data, left, and right. The left field is a reference to the left child, and the right field is a reference to the right child. The BinaryTree class provides the basic functionality for adding nodes to the tree. The add() method creates the root node of the tree or it traverses the tree recursively in order to find the right position for the new node. <br/>
        Trees are useful for problems that involve hierarchical relationships and where the data needs to be searched, added or removed efficiently. Examples of such problems include file systems, web pages, and network routing protocols. <br/>
        It's worth noting that, trees are used in many algorithms and data structure such as sorting and searching, path finding, and data compression and so on. <br/>
       </>,
    },
    {
        video : _binaryTree,
        link : "binary-tree",
        title : "Binary Tree",
        image : binary_tree,
        content1 : <><b>A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. This contrast with other types of trees, such as B-trees, which can have more than two children per node. A binary tree can be used for many different purposes, for example, for storage and retrieval of data, to find the shortest path between two nodes or for the implementation of certain algorithms such as the Huffman coding. </b><br/><br/>

        Here's an example of a simple binary tree implementation in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet31')}>Copy</button>
            <pre><code id="code-snippet31">
                {`class Node {
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
                }`}
            </code></pre>
        </div>
        <br/>
        In this example, the Node class is the basic building block of the binary tree, it has three fields: data, left, and right. The left field is a reference to the left child, and the right field is a reference to the right child. The BinaryTree class provides the basic functionality for adding nodes to the tree. The add() method creates the root node of the tree or it traverses the tree recursively in order to find the right position for the new node. <br/>
        Binary trees can be used in many different algorithms and data structures such as sorting algorithms, searching algorithms, and data compression algorithms. They also play a significant role in data structures like Binary Search Trees, AVL Trees, Heaps and Tries. <br/>
        It's important to note that if a tree is not a binary tree, it can have a different number of child for each node, and the algorithms and properties might differ from binary tree algorithms. <br/>
       </>,
    },
    {
        video : _binarySearchTree,
        link : "binary-search-tree",
        title : "Binary Search Tree",
        image : binary_search_tree,
        content1 : <><b>A binary search tree (BST) is a binary tree data structure in which each node has at most two children, and is characterized by the property that the value of each node is greater than or equal to the values in its left subtree and less than or equal to the values in its right subtree. This ordering of elements allows for efficient insertion, deletion, and search operations. </b><br/><br/>

        Here's an example of a simple binary search tree implementation in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet32')}>Copy</button>
            <pre><code id="code-snippet32">
                {`class Node {
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
                }`}
            </code></pre>
        </div>
        <br/>
        In this example, the Node class is the basic building block of the binary search tree, it has three fields: data, left, and right. The left field is a reference to the left child, and the right field is a reference to the right child. The BinarySearchTree class provides the basic functionality for adding and searching for nodes in the tree. The add() method creates the root node of the tree or it traverses the tree recursively in order to find the right position for the new node based on the BST property. The contains() method is to search the tree for the given key. <br/>
        Binary Search Trees are very efficient in searching for values in large sets of data. They offer an average time complexity of O(log n) for operations such as search, insert, and delete, making them well suited for applications such as searching large databases or searching for items in a dictionary. In the worst case scenario, for example, when the tree is skewed, the time complexity for these operations increases to O(n). <br/>
        Binary Search Trees have many other practical use cases, such as in sorting algorithms, implementing dictionary data structures, and finding the kth element in a set of data. <br/>
        Binary Search Tree have their own advantages and disadvantages as well. Some advantages are that they are very efficient in searching, inserting and deleting items. They also can be easily implemented using linked structures and dynamic memory allocation. Some disadvantages is that they can easily become unbalanced which can cause poor performance. To overcome this problem, Self-balancing binary search tree data structures like AVL Trees and Red-Black Trees are used. <br/>
        It's worth noting that, because of the efficient searching capabilities, the use of binary search trees is very common in many libraries, algorithms and computer science related applications. <br/>
       </>,
    },
    {
        video : _avlTree,
        link : "avl-tree",
        title : "AVL Tree",
        image : avl_tree,
        content1 : <><b>An AVL tree (Adelson-Velsky and Landis tree) is a self-balancing binary search tree. It is a type of balanced tree where the difference in heights of the left and right subtrees of any node is at most one. </b><br/>

        The main idea behind an AVL tree is to maintain the height balance property in a binary search tree. The idea is to check whether the height of left subtree and right subtree of any node differs by more than 1, if so the tree is rotated to restore its balance. There are four different types of rotations in AVL tree that are used to balance the tree. <br/><br/>
        Here's an example of a simple AVL tree implementation in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet33')}>Copy</button>
            <pre><code id="code-snippet33">
                {`class Node {
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
                }`}
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
    },
    {
        video : _maxHeap,
        link : "max-heap",
        title : "Max Heap",
        image : max_heap,
        content1 : <><b>Max heap is a specialized tree-based data structure that satisfies the heap property, which states that the value of each node in the heap must be greater than or equal to the values of its children.</b><br/><br/>

        The main idea behind an AVL tree is to maintain the height balance property in a binary search tree. The idea is to check whether the height of left subtree and right subtree of any node differs by more than 1, if so the tree is rotated to restore its balance. There are four different types of rotations in AVL tree that are used to balance the tree. <br/><br/>
        Here's an example of a simple AVL tree implementation in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet34')}>Copy</button>
            <pre><code id="code-snippet34">
                {`class Node {
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
                }`}
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
    },
    {
        video : _minHeap,
        link : "min-heap",
        title : "Min Heap",
        image : min_heap,
        content1 : <><b>Min heap is a specialized tree-based data structure that satisfies the heap property, which states that the value of each node in the heap must be less than or equal to the values of its children.</b><br/><br/>

        One common way to implement a min heap in Java is to use an array to store the elements of the heap. The parent-child relationships between the elements can be determined using their indices in the array: for a node at index i, its left child is located at index 2i+1 and its right child is located at index 2i+2. <br/><br/>
        Here is an example of a basic MinHeap class in Java that uses an array to store the elements: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet35')}>Copy</button>
            <pre><code id="code-snippet35">
                {`public class MinHeap {
                    private int[] heap;
                    private int size;

                    public MinHeap(int capacity) {
                        heap = new int[capacity];
                        size = 0;
                    }

                    public boolean isEmpty() {
                        return size == 0;
                    }

                    public int peek() {
                        if (isEmpty()) {
                            throw new IllegalStateException();
                        }
                        return heap[0];
                    }

                    public void insert(int value) {
                        if (size == heap.length) {
                            throw new IllegalStateException();
                        }
                        heap[size] = value;
                        fixUp(size);
                        size++;
                    }

                    public int delete() {
                        int result = heap[0];
                        heap[0] = heap[size - 1];
                        size--;
                        fixDown(0);
                        return result;
                    }

                    private void fixUp(int index) {
                        int node = heap[index];
                        while (index > 0 && node < heap[parent(index)]) {
                            heap[index] = heap[parent(index)];
                            index = parent(index);
                        }
                        heap[index] = node;
                    }

                    private void fixDown(int index) {
                        int node = heap[index];
                        int child = leftChild(index);
                        while (child < size) {
                            if (child + 1 < size && heap[child + 1] < heap[child]) {
                                child++;
                            }
                            if (node <= heap[child]) {
                                break;
                            }
                            heap[index] = heap[child];
                            index = child;
                            child = leftChild(index);
                        }
                        heap[index] = node;
                    }

                    private int parent(int index) {
                        return (index - 1) / 2;
                    }

                    private int leftChild(int index) {
                        return index * 2 + 1;
                    }
                }
                You could also use the class PriorityQueue which is an unbounded priority queue based on a priority heap.
                PriorityQueue<Integer> pq = new PriorityQueue<>();
                pq.add(3);
                pq.add(2);
                pq.add(1);
                pq.poll(); // returns 1`}
            </code></pre>
        </div>
        <br/>
        This is just a basic example, there's more ways to implement min heap but the core concept is always the same. <br/>
       </>,
    },
    {
        video : _preOrder,
        link : "pre-order",
        title : "Pre Order",
        image : pre_order,
        content1 : <><b>Pre-order traversal is a method for visiting the nodes of a tree or a graph data structure in a specific order. When applied to a tree, it visits the root node first, then recursively visits all the nodes in the left subtree, and finally recursively visits all the nodes in the right subtree. This means that the root node is visited before its children.</b><br/><br/>

        One common way to implement pre-order traversal in Java is to use recursion. Here is an example of a basic preOrder() method that implements pre-order traversal on a binary tree: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet36')}>Copy</button>
            <pre><code id="code-snippet36">
                {`class Node {
                    int data;
                    Node left;
                    Node right;

                    Node(int data) {
                        this.data = data;
                        left = null;
                        right = null;
                    }
                }

                public class BinaryTree {
                    Node root;

                    public void preOrder() {
                        preOrder(root);
                    }

                    private void preOrder(Node node) {
                        if (node != null) {
                            System.out.print(node.data + " ");
                            preOrder(node.left);
                            preOrder(node.right);
                        }
                    }
                }
                Another way to do this using an explicit stack is using Iterative PreOrder Traversal:
                class Node {
                    int data;
                    Node left;
                    Node right;

                    Node(int data) {
                        this.data = data;
                        left = null;
                        right = null;
                    }
                }

                public class BinaryTree {
                    Node root;

                    public void preOrder() {
                        Stack<Node> stack = new Stack<Node>();
                        Node node = root;
                        while (node != null) {
                            System.out.print(node.data + " ");
                            if (node.right != null) {
                                stack.push(node.right);
                            }
                            if (node.left != null) {
                                node = node.left;
                            } else if (stack.empty()) {
                                node = null;
                            } else {
                                node = stack.pop();
                            }
                        }
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        This are just examples, In a real world scenario you should adjust it to your needs. <br/>
       </>,
    },
    {
        video : _inOrder,
        link : "in-order",
        title : "In Order",
        image : in_order,
        content1 : <><b>In-order traversal is a method for visiting the nodes of a binary tree data structure in a specific order. When applied to a binary tree, it visits the left subtree, then the root node, and finally the right subtree. This means that the left subtree is traversed before the root and the root is traversed before the right subtree.</b><br/><br/>

        One common way to implement in-order traversal in Java is to use recursion. Here is an example of a basic inOrder() method that implements in-order traversal on a binary tree: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet37')}>Copy</button>
            <pre><code id="code-snippet37">
                {`class Node {
                    int data;
                    Node left;
                    Node right;

                    Node(int data) {
                        this.data = data;
                        left = null;
                        right = null;
                    }
                }

                public class BinaryTree {
                    Node root;

                    public void inOrder() {
                        inOrder(root);
                    }

                    private void inOrder(Node node) {
                        if (node != null) {
                            inOrder(node.left);
                            System.out.print(node.data + " ");
                            inOrder(node.right);
                        }
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        Another way of implementing in-order traversal is by using an explicit stack. Here is an example of an inOrder() method that implements in-order traversal on a binary tree using an explicit stack: <br/>
       
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet38')}>Copy</button>
            <pre><code id="code-snippet38">
                {`class Node {
                    int data;
                    Node left;
                    Node right;

                    Node(int data) {
                        this.data = data;
                        left = null;
                        right = null;
                    }
                }

                public class BinaryTree {
                    Node root;

                    public void inOrder() {
                        Stack<Node> stack = new Stack<Node>();
                        Node node = root;

                        while (node != null || !stack.empty()) {
                            while (node != null) {
                                stack.push(node);
                                node = node.left;
                            }
                            node = stack.pop();
                            System.out.print(node.data + " ");
                            node = node.right;
                        }
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        Note that both implementations above are for a specific binary tree implementation, the structure and classes could vary depending on the problem you are trying to solve. <br/>
       </>,
    },
    {
        video : _postOrder,
        link : "post-order",
        title : "Post Order",
        image : post_order,
        content1 : <><b>Post-order traversal is a method for visiting the nodes of a binary tree data structure in a specific order. When applied to a binary tree, it visits the left subtree, then the right subtree, and finally the root node. This means that the left subtree is traversed before the right subtree and the both of them are traversed before the root.</b><br/><br/>

        One common way to implement post-order traversal in Java is to use recursion. Here is an example of a basic postOrder() method that implements post-order traversal on a binary tree: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet39')}>Copy</button>
            <pre><code id="code-snippet39">
                {`class Node {
                    int data;
                    Node left;
                    Node right;

                    Node(int data) {
                        this.data = data;
                        left = null;
                        right = null;
                    }
                }

                public class BinaryTree {
                    Node root;

                    public void postOrder() {
                        postOrder(root);
                    }

                    private void postOrder(Node node) {
                        if (node != null) {
                            postOrder(node.left);
                            postOrder(node.right);
                            System.out.print(node.data + " ");
                        }
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        Another way to implement post-order traversal is using two stacks. Here is an example of an postOrder() method that implements post-order traversal on a binary tree using two stacks: <br/>
       
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet40')}>Copy</button>
            <pre><code id="code-snippet40">
                {`class Node {
                    int data;
                    Node left;
                    Node right;

                    Node(int data) {
                        this.data = data;
                        left = null;
                        right = null;
                    }
                }

                public class BinaryTree {
                    Node root;

                    public void postOrder() {
                        if(root == null) return;
                        Stack<Node> s1 = new Stack<Node>();
                        Stack<Node> s2 = new Stack<Node>();
                        s1.push(root);
                        while(!s1.isEmpty()) {
                            Node temp = s1.pop();
                            s2.push(temp);
                            if(temp.left != null) s1.push(temp.left);
                            if(temp.right != null) s1.push(temp.right);
                        }
                        while(!s2.isEmpty()) {
                            Node temp = s2.pop();
                            System.out.print(temp.data + " ");
                        }
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        Again, keep in mind that these are just examples and the classes and structures used may vary depending on the specific problem you are trying to solve. <br/>
       </>,
    },
    {
        video : _sorting,
        link : "sorting",
        title : "Sorting",
        image : img,
        content1 : <><b>Sorting is the process of arranging elements in a particular order, typically in an array or a list. In computer science, sorting algorithms are used to organize data in a way that it is easier to search, process, and analyze. There are many different sorting algorithms, each with their own strengths and weaknesses. Some of the most well-known sorting algorithms include: <br/>
        •	Bubble sort <br/>
        •	insertion sort <br/>
        •	selection sort <br/>
        •	merge sort <br/>
        •	quick sort <br/>
        •	heap sort <br/>
        •	counting sort <br/>
        </b><br/><br/>

        Here's an example of the bubble sort algorithm in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet41')}>Copy</button>
            <pre><code id="code-snippet41">
                {`public static void bubbleSort(int[] arr) {
                    for (int i = 0; i < arr.length - 1; i++) {
                        for (int j = 0; j < arr.length - i - 1; j++) {
                            if (arr[j] > arr[j + 1]) {
                                int temp = arr[j];
                                arr[j] = arr[j + 1];
                                arr[j + 1] = temp;
                            }
                        }
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        And an example of the quick sort algorithm in Java: <br/>
       
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet42')}>Copy</button>
            <pre><code id="code-snippet42">
                {`public class QuickSort {
                    public static void sort(int[] arr, int low, int high) {
                        if (low < high) {
                            int pivotIndex = partition(arr, low, high);
                            sort(arr, low, pivotIndex);
                            sort(arr, pivotIndex + 1, high);
                        }
                    }

                    private static int partition(int[] arr, int low, int high) {
                        int pivot = arr[low];
                        int i = low - 1;
                        int j = high + 1;
                        while (true) {
                            do {
                                i++;
                            } while (arr[i] < pivot);
                            do {
                                j--;
                            } while (arr[j] > pivot);
                            if (i >= j) {
                                return j;
                            }
                            int temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                        }
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        Java also provides a sort method in the Arrays class, which uses the Dual-Pivot Quicksort algorithm. <br/>
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet43')}>Copy</button>
            <pre><code id="code-snippet43">
                {`int[] array = {9, 8, 7, 6, 5, 4, 3, 2, 1};
                Arrays.sort(array);`}
            </code></pre>
        </div>
        <br/>
        These are just examples of sorting algorithms, there's many others and even variations of these, the best sorting algorithm for a specific use case depends on various factors such as data distribution, size, and stability.
       </>,
    },
    {
        video : _bubbleSort,
        link : "bubble-sort",
        title : "Bubble Sort",
        image : bubble_sort,
        content1 : <><b>Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.</b> <br/><br/>
        
        The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list as the sort iterations progress. <br/>
        Here's an example of the bubble sort algorithm in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet44')}>Copy</button>
            <pre><code id="code-snippet44">
                {`public static void bubbleSort(int[] arr) {
                    for (int i = 0; i < arr.length - 1; i++) {
                        for (int j = 0; j < arr.length - i - 1; j++) {
                            if (arr[j] > arr[j + 1]) {
                                int temp = arr[j];
                                arr[j] = arr[j + 1];
                                arr[j + 1] = temp;
                            }
                        }
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        In this example, the outer loop runs from 0 to n-1 (n is the size of the array) and the inner loop runs from 0 to n-i-1. This way in every iteration the largest element will move to the end of the array, in the next iteration it will not be considered anymore, so the next largest element will move to the end and so on. <br/>
        It's important to keep in mind that Bubble sort has an O(n^2) time complexity, this makes it less efficient than other sorting algorithms like quicksort, merge sort or heapsort for larger arrays. However, bubble sort is easy to understand and can be useful in certain cases where the list is nearly sorted or the elements are small, such as sorting small lists or for educational purposes. <br/>
       </>,
    },
    {
        video : _mergeSort,
        link : "merge-sort",
        title : "Merge Sort",
        image : merge_sort,
        content1 : <><b>Merge sort is a divide-and-conquer algorithm for sorting. It works by dividing an unsorted list into two sublists, recursively sorting the sublists, and then merging the sublists back into a single sorted list.</b> <br/><br/>
        
        The merge sort algorithm can be broken down into three main steps: <br/>
        1.	Divide the unsorted list into n sublists, each containing one element. <br/>
        2.	Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list. <br/>
        Here is an example of the merge sort algorithm implemented in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet45')}>Copy</button>
            <pre><code id="code-snippet45">
                {`public class MergeSort {
                    public static void sort(int[] arr) {
                        int[] temp = new int[arr.length];
                        sort(arr, temp, 0, arr.length - 1);
                    }

                    private static void sort(int[] arr, int[] temp, int left, int right) {
                        if (left < right) {
                            int mid = (left + right) / 2;
                            sort(arr, temp, left, mid);
                            sort(arr, temp, mid + 1, right);
                            merge(arr, temp, left, mid, right);
                        }
                    }

                    private static void merge(int[] arr, int[] temp, int left, int mid, int right) {
                        int i = left;
                        int j = mid + 1;
                        int k = left;
                        while (i <= mid && j <= right) {
                            if (arr[i] < arr[j]) {
                                temp[k] = arr[i];
                                i++;
                            } else {
                                temp[k] = arr[j];
                                j++;
                            }
                            k++;
                        }
                        while (i <= mid) {
                            temp[k] = arr[i];
                            i++;
                            k++;
                        }
                        while (j <= right) {
                            temp[k] = arr[j];
                            j++;
                            k++;
                        }
                        for (k = left; k <= right; k++) {
                            arr[k] = temp[k];
                        }
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        The merge method takes the three indices left, middle and right, the left and right indices represent the boundaries of the part of the array that we are currently sorting and the middle index is used to split the array in two. Then, it compares the elements in the two subarrays and copies the smaller element into a temporary array, incrementing the corresponding index. This process is repeated until all the elements from both subarrays have been copied into the temporary array. Finally, the sorted elements from the temporary array are copied back into the original array. <br/>
        As with the previous explanation, the merge sort algorithm is based on the divide and conquer paradigm, breaking down the original problem into smaller subproblems that are recursively solved. And, like before, merge sort has an O(n log n) time complexity, making it more efficient than algorithms like bubble sort or insertion sort for larger arrays. Additionally, merge sort is also a stable sorting algorithm, meaning that if two elements have the same value, their relative order in the output will be the same as in the input. <br/>
       </>,
    },
    {
        video : _quickSort,
        link : "quick-sort",
        title : "Quick Sort",
        image : quick_sort,
        content1 : <><b>QuickSort is a divide and conquer algorithm that is used to sort a collection of items. It's a widely used sorting algorithm because of its simplicity and its performance. The basic idea of the quicksort algorithm is to pick a "pivot" element from the array, partition the other elements into two sub-arrays, one containing all the elements less than the pivot, and the other containing all the elements greater than the pivot. Then it recursively sorts the two sub-arrays. </b> <br/><br/>
        
        Here's an example of the quicksort algorithm implemented in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet46')}>Copy</button>
            <pre><code id="code-snippet46">
                {`public class QuickSort {
                    public static void sort(int[] arr, int low, int high) {
                        if (low < high) {
                            int pivotIndex = partition(arr, low, high);
                            sort(arr, low, pivotIndex);
                            sort(arr, pivotIndex + 1, high);
                        }
                    }

                    private static int partition(int[] arr, int low, int high) {
                        int pivot = arr[low];
                        int i = low - 1;
                        int j = high + 1;
                        while (true) {
                            do {
                                i++;
                            } while (arr[i] < pivot);
                            do {
                                j--;
                            } while (arr[j] > pivot);
                            if (i >= j) {
                                return j;
                            }
                            int temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                        }
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        In this implementation, the sort method takes the parameters of low, high, and the array we want to sort. The partition method is used to divide the array into the two sub-arrays. In this case, the pivot is chosen as the first element of the array, but for a better performance, it's advisable to use a random element as pivot or a pivot that is the median of the array. <br/>
        Quicksort has an average case time complexity of O(n log n) and a worst-case time complexity of O(n^2). However, the average case is more likely to happen and the algorithm is efficient in practice. Like merge sort, quicksort is also not a stable sorting algorithm, that means that two elements with the same value may not keep their relative order in the output as in the input. <br/>
       </>,
    },
    {
        video : _selectionSort,
        link : "selection-sort",
        title : "Selection Sort",
        image : selection_sort,
        content1 : <><b>Selection sort is a simple sorting algorithm that works by repeatedly selecting the smallest (or largest, depending on the implementation) element from the unsorted portion of the array and swapping it with the first element of the unsorted portion. This process is repeated for the remaining unsorted elements until the entire array is sorted. </b> <br/><br/>
        
        The selection sort algorithm can be broken down into two main steps: <br/> 
        1.	Find the minimum element from the unsorted portion of the array. <br/>
        2.	Swap the found element with the first element of the unsorted portion. <br/>
        Here is an example of the selection sort algorithm implemented in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet47')}>Copy</button>
            <pre><code id="code-snippet47">
                {`public static void selectionSort(int[] arr) {
                    int n = arr.length;
                    for (int i = 0; i < n - 1; i++) {
                        int min_idx = i;
                        for (int j = i + 1; j < n; j++) {
                            if (arr[j] < arr[min_idx]) {
                                min_idx = j;
                            }
                        }
                        int temp = arr[min_idx];
                        arr[min_idx] = arr[i];
                        arr[i] = temp;
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        In this example, the outer loop runs from 0 to n-2 (n is the size of the array) and the inner loop runs from i+1 to n-1. In each iteration of the outer loop, the inner loop compares the current element with the minimum element in the subarray starting from i+1 to n-1, and it keeps the index of the minimum element in min_idx. When the inner loop ends, the element at the index min_idx is swapped with the element at the current index of the outer loop (i). <br/>
        It's important to keep in mind that the selection sort algorithm has a time complexity of O(n^2), which makes it less efficient than other sorting algorithms like quicksort, merge sort or heapsort for larger arrays. However, the selection sort is simple to understand and it may be useful in certain cases, like sorting small lists or for educational purposes. <br/>
       </>,
    },
    {
        video : _insertionSort,
        link : "insertion-sort",
        title : "Insertion Sort",
        image : insertion_sort,
        content1 : <><b>Insertion sort is a simple sorting algorithm that works by building up a sorted list one item at a time. It repeatedly takes the next element from the input list and inserts it into the correct position in the sorted list. </b> <br/><br/>
        
        The insertion sort algorithm can be broken down into two main steps: <br/> 
        1.	Start with an empty sorted list and an unsorted input list. <br/>
        2.	Repeat the following steps for each element in the input list: <br/>
        •	Take the next element from the input list <br/>
        •	Compare it with each element in the sorted list, moving them to the right as necessary <br/>
        •	Insert the next element into the correct position in the sorted list <br/>
        Here is an example of the insertion sort algorithm implemented in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet48')}>Copy</button>
            <pre><code id="code-snippet48">
                {`public static void insertionSort(int[] arr) {
                    int n = arr.length;
                    for (int i = 1; i < n; i++) {
                        int key = arr[i];
                        int j = i-1;
                        while (j >= 0 && arr[j] > key) {
                            arr[j+1] = arr[j];
                            j--;
                        }
                        arr[j+1] = key;
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        In this example, the outer loop runs from 1 to n-1 (n is the size of the array) and the inner loop runs from i-1 to 0. At each iteration of the outer loop, the inner loop takes the element at the current index i of the outer loop and compares it with the elements in the subarray that starts at i-1, it moves the elements to the right as necessary and it finds the position to insert the key (the element at the index i) in the correct position in the sorted subarray. <br/>
        It's important to keep in mind that the insertion sort algorithm has a time complexity of O(n^2) in the worst case, but the best and average case time complexity is O(n) when the input array is already sorted. This algorithm can be useful in certain cases, such as small lists or when the input array is almost sorted, it can also be used as a subroutine in other sorting algorithms. <br/>
       </>,
    },
    {
        video : _hashing,
        link : "hashing",
        title : "Hashing",
        image : hashing,
        content1 : <><b>Hashing is a technique used to implement an associative array, a structure that can map keys to values. A hash function is used to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found or stored. The goal of a good hash function is to distribute the keys evenly across the array, so that on average each slot contains the same number of keys (a property known as a uniform distribution).  </b> <br/><br/>
        
        Here's an example of a simple hash function that can be used to store strings in a hash table: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet49')}>Copy</button>
            <pre><code id="code-snippet49">
                {`public class SimpleHashFunction {
                    public static int hash(String key, int tableSize) {
                        int hashVal = 0;
                        for (int i = 0; i < key.length(); i++) {
                            hashVal += key.charAt(i);
                        }
                        return hashVal % tableSize;
                    }
                }`}
            </code></pre>
        </div>
        <br/>
        In this example, the hash function iterates through each character in the input string and adds its ASCII value to a running total. The result is then taken modulo the table size to ensure that it falls within the range of valid indices for the hash table. <br/>
        It's important to note that hash functions can have collisions when two keys map to the same index, in order to avoid collisions some techniques can be used like open addressing, chaining, rehashing, etc. <br/>
        Hash tables are useful when you need to store and retrieve data quickly based on a key, they can also be used for other algorithms such as counting sort, in which the keys are transformed into integers between 0 and k-1 by a hash function, and then a counting algorithm is applied. <br/>
       </>,
    },
    {
        video : _graph,
        link : "graph",
        title : "Graph",
        image : graph,
        content1 : <><b>A graph is a non-linear data structure that consists of a finite set of vertices (also called nodes) and a set of edges connecting these vertices. The vertices can represent anything, such as cities in a transportation network or web pages on the internet, and the edges represent relationships or connections between the vertices, such as roads between cities or links between web pages. </b> <br/><br/>
        
        There are two main types of graphs: <br/>
        •	Directed Graphs (or Digraphs) which edges have a direction, it means they connect one vertex to another. <br/>
        •	Undirected Graphs, edges connect two vertices in both directions. <br/>
        In Java, you can represent a graph using various data structures and classes, such as an adjacency matrix or an adjacency list. Here is an example of how you might represent an undirected graph using an adjacency list in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet50')}>Copy</button>
            <pre><code id="code-snippet50">
                {`import java.util.LinkedList;

                public class Graph {
                private int numVertices;
                private LinkedList<Integer>[] adjacencyList;

                public Graph(int numVertices) {
                    this.numVertices = numVertices;
                    this.adjacencyList = new LinkedList[numVertices];
                    
                    for (int i = 0; i < numVertices; i++) {
                    this.adjacencyList[i] = new LinkedList<Integer>();
                    }
                }
                
                public void addEdge(int vertex1, int vertex2) {
                    this.adjacencyList[vertex1].add(vertex2);
                    this.adjacencyList[vertex2].add(vertex1);
                }
                
                public void printGraph() {
                    for (int i = 0; i < numVertices; i++) {
                    System.out.print("Vertex " + i + " is connected to: ");
                    
                    for (int vertex : adjacencyList[i]) {
                        System.out.print(vertex + " ");
                    }
                    System.out.println();
                    }
                }
                
                public static void main(String[] args) {
                    Graph graph = new Graph(5);
                    graph.addEdge(0, 1);
                    graph.addEdge(0, 4);
                    graph.addEdge(1, 2);
                    graph.addEdge(1, 3);
                    graph.addEdge(1, 4);
                    graph.addEdge(2, 3);
                    graph.printGraph();
                }
                }`}
            </code></pre>
        </div>
        <br/>
        The above example will output: <br/> <br/>

        Vertex 0 is connected to: 1 4  <br/>
        Vertex 1 is connected to: 0 2 3 4  <br/>
        Vertex 2 is connected to: 1 3  <br/>
        Vertex 3 is connected to: 1 2  <br/>
        Vertex 4 is connected to: 0 1 <br/> <br/>
        It is worth noting that Java does not provide a built-in class for graphs, so typically developers use either adjacency lists or adjacency matrix with linkedlist or array to implement graph. Also, There are Graph libraries like JGraphT, that provides a lot of useful classes and interfaces for working with Graphs in Java. <br/>
       </>,
    },
    {
        video : _dfs,
        link : "dfs",
        title : "DFS",
        image : dfs,
        content1 : <><b>DFS (Depth-First Search) is a type of traversal algorithm for traversing and searching trees or graphs. The basic idea of the DFS algorithm is to start at a given vertex and explore as far as possible along each branch before backtracking. <br/> The process of DFS traversal of a graph is similar to that of traversing a tree, but with a graph, we may encounter a cycle, therefore, we need to keep track of the visited vertex to avoid going in an infinite loop. </b> <br/><br/>
        
        Here is an example of how to perform a DFS traversal on an undirected graph in Java using an adjacency list to represent the graph: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet51')}>Copy</button>
            <pre><code id="code-snippet51">
                {`import java.util.LinkedList;

                public class DFS {
                private int numVertices;
                private LinkedList<Integer>[] adjacencyList;
                private boolean[] visited;

                public DFS(int numVertices) {
                    this.numVertices = numVertices;
                    this.adjacencyList = new LinkedList[numVertices];
                    this.visited = new boolean[numVertices];
                    
                    for (int i = 0; i < numVertices; i++) {
                    this.adjacencyList[i] = new LinkedList<Integer>();
                    }
                }
                
                public void addEdge(int vertex1, int vertex2) {
                    this.adjacencyList[vertex1].add(vertex2);
                    this.adjacencyList[vertex2].add(vertex1);
                }
                
                public void dfs(int startVertex) {
                    System.out.print(startVertex + " ");
                    visited[startVertex] = true;
                    
                    for (int vertex : adjacencyList[startVertex]) {
                    if (!visited[vertex]) {
                        dfs(vertex);
                    }
                    }
                }
                
                public static void main(String[] args) {
                    DFS graph = new DFS(5);
                    graph.addEdge(0, 1);
                    graph.addEdge(0, 4);
                    graph.addEdge(1, 2);
                    graph.addEdge(1, 3);
                    graph.addEdge(1, 4);
                    graph.addEdge(2, 3);
                    graph.dfs(0);
                }
                }`}
            </code></pre>
        </div>
        <br/><br/>
        The above example will output: 0 1 2 3 4 <br/>
        It is important to note that DFS is not the only algorithm for graph traversal, another commonly used algorithm is BFS (Breadth-First Search) which is different from DFS in the order of visiting the vertices. DFS usually explores deeper in the graph before visiting the adjacent vertex, while BFS visits the adjacent vertex before going deeper. <br/>
        Also note that DFS can also used to solve other problems like finding connected components, detecting cycle in a graph, topological sorting and finding strongly connected components in a directed graph. <br/>
       </>,
    },
    {
        video : _bfs,
        link : "bfs",
        title : "BFS",
        image : bfs,
        content1 : <><b>BFS (Breadth-First Search) is a type of traversal algorithm for traversing and searching trees or graphs. The basic idea of the BFS algorithm is to start at a given vertex and explore all the vertices at the current depth level before moving on to the vertices at the next depth level. </b> <br/><br/>
        
        Here is an example of how to perform a BFS traversal on an undirected graph in Java using an adjacency list to represent the graph: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet52')}>Copy</button>
            <pre><code id="code-snippet52">
                {`import java.util.LinkedList;
                import java.util.Queue;

                public class BFS {
                    private int numVertices;
                    private LinkedList<Integer>[] adjacencyList;
                    private boolean[] visited;

                    public BFS(int numVertices) {
                        this.numVertices = numVertices;
                        this.adjacencyList = new LinkedList[numVertices];
                        this.visited = new boolean[numVertices];

                        for (int i = 0; i < numVertices; i++) {
                            this.adjacencyList[i] = new LinkedList<Integer>();
                        }
                    }

                    public void addEdge(int vertex1, int vertex2) {
                        this.adjacencyList[vertex1].add(vertex2);
                        this.adjacencyList[vertex2].add(vertex1);
                    }

                    public void bfs(int startVertex) {
                        Queue<Integer> queue = new LinkedList<>();
                        queue.add(startVertex);
                        visited[startVertex] = true;

                        while (!queue.isEmpty()) {
                            int currentVertex = queue.poll();
                            System.out.print(currentVertex + " ");

                            for (int vertex : adjacencyList[currentVertex]) {
                                if (!visited[vertex]) {
                                    visited[vertex] = true;
                                    queue.add(vertex);
                                }
                            }
                        }
                    }

                    public static void main(String[] args) {
                        BFS graph = new BFS(5);
                        graph.addEdge(0, 1);
                        graph.addEdge(0, 4);
                        graph.addEdge(1, 2);
                        graph.addEdge(1, 3);
                        graph.addEdge(1, 4);
                        graph.addEdge(2, 3);
                        graph.bfs(0);
                    }
                }`}
            </code></pre>
        </div>
        <br/><br/>
        The above example will output: 0 1 4 2 3 <br/>
        It is important to note that BFS is not the only algorithm for graph traversal, another commonly used algorithm is DFS (Depth-First Search) which is different from BFS in the order of visiting the vertices. BFS visits the adjacent vertex before going deeper, while DFS usually explores deeper in the graph before visiting the adjacent vertex. <br/>
        Also note that BFS can be used to solve other problems like finding the shortest path in an unweighted graph, test bipartiteness of a graph, and traversing a maze. <br/>
       </>,
    },
    {
        video : _radixSort,
        link : "radix-sort",
        title : "Radix Sort",
        image : radix_sort,
        content1 : <><b>Radix sort is a sorting algorithm that sorts data by comparing digits of the elements from right to left, starting with the least significant digit and ending with the most significant digit. It is a non-comparative sorting algorithm that makes use of the bucket sort technique to group elements based on their digits. The basic idea behind radix sort is to sort elements digit by digit, based on their place value, starting from the rightmost digit.</b> <br/><br/>
        
        Here's an example of how radix sort works in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet53')}>Copy</button>
            <pre><code id="code-snippet53">
                {`import java.util.*;

                    public class RadixSort {
                        public static void radixSort(int[] arr) {
                            int n = arr.length;
                            int max = getMax(arr);

                            for (int exp = 1; max / exp > 0; exp *= 10) {
                                countingSort(arr, n, exp);
                            }
                        }

                        public static int getMax(int[] arr) {
                            int max = arr[0];
                            for (int i = 1; i < arr.length; i++) {
                                if (arr[i] > max) {
                                    max = arr[i];
                                }
                            }
                            return max;
                        }

                        public static void countingSort(int[] arr, int n, int exp) {
                            int[] output = new int[n];
                            int[] count = new int[10];

                            for (int i = 0; i < n; i++) {
                                int digit = (arr[i] / exp) % 10;
                                count[digit]++;
                            }

                            for (int i = 1; i < 10; i++) {
                                count[i] += count[i - 1];
                            }

                            for (int i = n - 1; i >= 0; i--) {
                                int digit = (arr[i] / exp) % 10;
                                output[count[digit] - 1] = arr[i];
                                count[digit]--;
                            }

                            for (int i = 0; i < n; i++) {
                                arr[i] = output[i];
                            }
                        }

                        public static void main(String[] args) {
                            int[] arr = {170, 45, 75, 90, 802, 24, 2, 66};
                            radixSort(arr);
                            System.out.println(Arrays.toString(arr));
                        }
                    }`}

            </code></pre>
        </div>
        <br/><br/>
        In this example, we have implemented the radix sort algorithm in Java. The radixSort() function takes an array of integers as input and sorts them using the radix sort algorithm. It first calculates the maximum element in the array, and then uses a loop to perform counting sort on each digit, starting from the least significant digit and ending with the most significant digit.  <br/>
        <br/>
        The getMax() function simply calculates the maximum element in the array. The countingSort() function is a modified version of the counting sort algorithm that sorts elements based on their digits. Finally, in the main() function, we have initialized an array of integers and sorted it using the radixSort() function, and then printed the sorted array using the Arrays.toString() method.<br/>
       </>,
    },
    {
        video : _adjacencyList,
        link : "adjacency-list",
        title : "Adjacency List",
        image : adjacency_list_graph,
        content1 : <><b>An adjacency list is a data structure used to represent a graph as a collection of linked lists. Each linked list represents a vertex in the graph and contains a list of its adjacent vertices.</b> <br/><br/>
        
        Here's an example of how to implement an adjacency list in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet54')}>Copy</button>
            <pre><code id="code-snippet54">
            {`import java.util.*;

                public class Graph {
                    private int V;
                    private LinkedList<Integer>[] adjList;

                    public Graph(int V) {
                        this.V = V;
                        adjList = new LinkedList[V];
                        for (int i = 0; i < V; i++) {
                            adjList[i] = new LinkedList<Integer>();
                        }
                    }

                    public void addEdge(int u, int v) {
                        adjList[u].add(v);
                        adjList[v].add(u);
                    }

                    public void printGraph() {
                        for (int i = 0; i < V; i++) {
                            System.out.print(i + ": ");
                            for (int v : adjList[i]) {
                                System.out.print(v + " ");
                            }
                            System.out.println();
                        }
                    }

                    public static void main(String[] args) {
                        Graph graph = new Graph(5);
                        graph.addEdge(0, 1);
                        graph.addEdge(0, 4);
                        graph.addEdge(1, 2);
                        graph.addEdge(1, 3);
                        graph.addEdge(1, 4);
                        graph.addEdge(2, 3);
                        graph.addEdge(3, 4);

                        graph.printGraph();
                    }
                }`}

            </code></pre>
        </div>
        <br/><br/>

        In this example, we have implemented an adjacency list to represent an undirected graph in Java. The Graph class has two instance variables: V, which represents the number of vertices in the graph, and adjList, which is an array of linked lists that represents the adjacency list. The constructor initializes the adjList array by creating a new linked list for each vertex. 
        <br/><br/>
        The addEdge() method takes two integers u and v as input and adds an edge between them by adding v to the linked list of u and adding u to the linked list of v.
        <br/><br/>
        The printGraph() method prints the adjacency list representation of the graph to the console. It does this by iterating over each vertex in the graph, printing the vertex number, and then iterating over the linked list of adjacent vertices and printing their numbers.
        <br/><br/>
        In the main() function, we create a new Graph object with 5 vertices and add edges between them. Finally, we print the adjacency list representation of the graph to the console.
       </>,
    },
    {
        video : _adjacencyMatrix,
        link : "adjacency-matrix",
        title : "Adjacency Matrix",
        image : adjacency_Matrix_graph,
        content1 : <><b>An adjacency matrix is a data structure used to represent a graph as a 2D array of boolean values. The value at matrix[i][j] is true if there is an edge between vertices i and j, and false otherwise.</b> <br/><br/>
        
        Here's an example of how to implement an adjacency matrix in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet55')}>Copy</button>
            <pre><code id="code-snippet55">
            {`import java.util.*;

                public class Graph {
                    private int V;
                    private boolean[][] adjMatrix;

                    public Graph(int V) {
                        this.V = V;
                        adjMatrix = new boolean[V][V];
                    }

                    public void addEdge(int u, int v) {
                        adjMatrix[u][v] = true;
                        adjMatrix[v][u] = true;
                    }

                    public void printGraph() {
                        for (int i = 0; i < V; i++) {
                            for (int j = 0; j < V; j++) {
                                System.out.print(adjMatrix[i][j] ? "1 " : "0 ");
                            }
                            System.out.println();
                        }
                    }

                    public static void main(String[] args) {
                        Graph graph = new Graph(5);
                        graph.addEdge(0, 1);
                        graph.addEdge(0, 4);
                        graph.addEdge(1, 2);
                        graph.addEdge(1, 3);
                        graph.addEdge(1, 4);
                        graph.addEdge(2, 3);
                        graph.addEdge(3, 4);

                        graph.printGraph();
                    }
                }`}

            </code></pre>
        </div>
        <br/><br/>

        In this example, we have implemented an adjacency matrix to represent an undirected graph in Java. The Graph class has two instance variables: V, which represents the number of vertices in the graph, and adjMatrix, which is a 2D boolean array that represents the adjacency matrix. The constructor initializes the adjMatrix array to false for all vertices.
        <br/><br/>
        The addEdge() method takes two integers u and v as input and adds an edge between them by setting adjMatrix[u][v] and adjMatrix[v][u] to true.
        <br/><br/>
        The printGraph() method prints the adjacency matrix representation of the graph to the console. It does this by iterating over each row and column of the matrix, printing a 1 if the value at matrix[i][j] is true and a 0 otherwise.
        <br/><br/>
        In the main() function, we create a new Graph object with 5 vertices and add edges between them. Finally, we print the adjacency matrix representation of the graph to the console.
        
       </>,
    },
    {
        video : _linearProbing,
        link : "linear-probing",
        title : "Linear Probing",
        image : linear_probing_hashing,
        content1 : <><b>Linear probing is a technique used in hash tables to resolve collisions that occur when two or more keys are hashed to the same index in the table. When a collision occurs, linear probing searches for the next available slot in the table, starting from the index where the collision occurred, by incrementing the index until an empty slot is found.</b> <br/><br/>
        
        Here's an example of linear probing in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet56')}>Copy</button>
            <pre><code id="code-snippet56">
                {`public class HashTable {
                    private int[] table;
                    private int size;

                    public HashTable(int size) {
                        this.size = size;
                        table = new int[size];
                        Arrays.fill(table, -1); // initialize all slots to -1 (empty)
                    }

                    public void insert(int key) {
                        int hash = key % size; // calculate the hash value
                        int i = hash;
                        while (table[i] != -1) { // check if slot is empty
                            i = (i + 1) % size; // linear probing to find the next empty slot
                            if (i == hash) { // if we've gone all the way around the table
                                throw new RuntimeException("Table is full");
                            }
                        }
                        table[i] = key; // insert key into the empty slot
                    }

                    public int search(int key) {
                        int hash = key % size; // calculate the hash value
                        int i = hash;
                        while (table[i] != -1) { // check if slot is empty
                            if (table[i] == key) { // check if the key is found
                                return i;
                            }
                            i = (i + 1) % size; // linear probing to check the next slot
                            if (i == hash) { // if we've gone all the way around the table
                                break;
                            }
                        }
                        return -1; // key not found
                    }

                    public void delete(int key) {
                        int index = search(key); // find the index of the key
                        if (index != -1) { // if the key is found
                            table[index] = -1; // delete the key by setting the slot to -1 (empty)
                        }
                    }
                }`}

            </code></pre>
        </div>
        <br/><br/>
        In this implementation, the hash table is an array of integers, and the size of the table is specified when the table is created. The insert() method inserts a key into the table by first calculating the hash value of the key, and then using linear probing to find the next empty slot in the table. If the table is full, an exception is thrown.
        <br/><br/>
        The search() method searches for a key in the table by calculating the hash value of the key and then using linear probing to search for the key in the table. The delete() method deletes a key from the table by finding the index of the key using the search() method, and then setting the slot at that index to -1 (empty).
       </>,
    },
    {
        video : _quadraticProbing,
        link : "quadratic-probing",
        title : "Quadratic Probing",
        image : quardatic_probing_hashing,
        content1 : <><b>
        Quadratic probing is a technique used in hash tables to resolve collisions that occur when two or more keys are hashed to the same index in the table. When a collision occurs, quadratic probing searches for the next available slot in the table, starting from the index where the collision occurred, by incrementing the index using a quadratic function until an empty slot is found.</b> <br/><br/>
        
        Here's an example of quadratic probing in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet57')}>Copy</button>
            <pre><code id="code-snippet57">
                {`public class HashTable {
                    private int[] table;
                    private int size;

                    public HashTable(int size) {
                        this.size = size;
                        table = new int[size];
                        Arrays.fill(table, -1); // initialize all slots to -1 (empty)
                    }

                    public void insert(int key) {
                        int hash = key % size; // calculate the hash value
                        int i = hash;
                        int j = 1;
                        while (table[i] != -1) { // check if slot is empty
                            i = (hash + j * j) % size; // quadratic probing to find the next empty slot
                            j++;
                            if (i == hash) { // if we've gone all the way around the table
                                throw new RuntimeException("Table is full");
                            }
                        }
                        table[i] = key; // insert key into the empty slot
                    }

                    public int search(int key) {
                        int hash = key % size; // calculate the hash value
                        int i = hash;
                        int j = 1;
                        while (table[i] != -1) { // check if slot is empty
                            if (table[i] == key) { // check if the key is found
                                return i;
                            }
                            i = (hash + j * j) % size; // quadratic probing to check the next slot
                            j++;
                            if (i == hash) { // if we've gone all the way around the table
                                break;
                            }
                        }
                        return -1; // key not found
                    }

                    public void delete(int key) {
                        int index = search(key); // find the index of the key
                        if (index != -1) { // if the key is found
                            table[index] = -1; // delete the key by setting the slot to -1 (empty)
                        }
                    }
                }`}

            </code></pre>
        </div>
        <br/><br/>
        In this implementation, the hash table is an array of integers, and the size of the table is specified when the table is created. The insert() method inserts a key into the table by first calculating the hash value of the key, and then using quadratic probing to find the next empty slot in the table. If the table is full, an exception is thrown.
        <br/><br/>
        The search() method searches for a key in the table by calculating the hash value of the key and then using quadratic probing to search for the key in the table. The delete() method deletes a key from the table by finding the index of the key using the search() method, and then setting the slot at that index to -1 (empty).
        <br/><br/>
        Note that in quadratic probing, the step size is determined by a quadratic function (hash + j*j) % size, where j is the number of probes. This means that the probes move away from the original hash index in a more spread out manner compared to linear probing, which can help to reduce clustering and improve the performance of the hash table.
       </>,
    },
    {
        video : _separateChaining,
        link : "separate-chaining",
        title : "Separate Chaining",
        image : separate_chaining_hashing,
        content1 : <><b>Separate chaining is a technique used in hash tables to resolve collisions that occur when two or more keys are hashed to the same index in the table. In this technique, each slot in the table contains a linked list of all the keys that hash to that index. When a collision occurs, the new key is added to the end of the linked list at the corresponding index in the table.</b> <br/><br/>
        
        Here's an example of separate chaining in Java: <br/>
        
        <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard('code-snippet58')}>Copy</button>
            <pre><code id="code-snippet58">
                {`public class HashTable {
                    private LinkedList<Integer>[] table;
                    private int size;

                    public HashTable(int size) {
                        this.size = size;
                        table = new LinkedList[size];
                        for (int i = 0; i < size; i++) {
                            table[i] = new LinkedList<Integer>(); // initialize each slot with an empty linked list
                        }
                    }

                    public void insert(int key) {
                        int hash = key % size; // calculate the hash value
                        table[hash].add(key); // add the key to the end of the linked list at the hash index
                    }

                    public boolean search(int key) {
                        int hash = key % size; // calculate the hash value
                        LinkedList<Integer> list = table[hash]; // get the linked list at the hash index
                        for (int i : list) {
                            if (i == key) { // check if the key is found in the linked list
                                return true;
                            }
                        }
                        return false; // key not found
                    }

                    public void delete(int key) {
                        int hash = key % size; // calculate the hash value
                        LinkedList<Integer> list = table[hash]; // get the linked list at the hash index
                        list.remove(Integer.valueOf(key)); // remove the key from the linked list
                    }
                }`}

            </code></pre>
        </div>
        <br/><br/>
        In this implementation, the hash table is an array of linked lists of integers, and the size of the table is specified when the table is created. The insert() method inserts a key into the table by first calculating the hash value of the key, and then adding the key to the end of the linked list at the corresponding index in the table.
        <br/><br/>
        The search() method searches for a key in the table by calculating the hash value of the key and then searching the linked list at the corresponding index for the key. The delete() method deletes a key from the table by calculating the hash value of the key, and then removing the key from the linked list at the corresponding index.
        <br/><br/>
        Note that in separate chaining, the number of keys that can be stored in the table is limited by the size of the table and the maximum size of each linked list. If the linked lists become too long, it can degrade the performance of the hash table. To mitigate this issue, the size of the table and the maximum size of each linked list should be carefully chosen based on the expected number of keys and the distribution of the hash function.
       </>,
    },
];