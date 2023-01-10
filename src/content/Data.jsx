import img from '../images/pic.jpg'
import '../css/style.css';

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
                int[] numbers = {1, 2, 3, 4, 5}; <br/>
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
        {/* <div className="code-clipboard">
            <button id="clipboard-button" onClick={() => copyToClipboard()}>Copy</button>
            <pre><code id="code-snippet">
                for (int i = 0; i < numbers.length; i++) { 
                    numbers[i] = i; 
                } 
            </code></pre>
        </div> */}

       </>,
        
        // Linked Lists: A linked list is a collection of items that are stored in a linear fashion and linked together using pointers.<br/>
        
        // Stacks: A stack is a linear data structure that follows the Last In, First Out (LIFO) principle.<br/>
        
        // Queues: A queue is a linear data structure that follows the First In, First Out (FIFO) principle.<br/>
        
        // Trees: A tree is a non-linear data structure that consists of nodes connected by edges. It is often used to represent hierarchical relationships.<br/>
        
        // Graphs: A graph is a non-linear data structure that consists of a set of vertices (nodes) and a set of edges connecting the vertices.<br/>
        
        // Hash Tables: A hash table is a data structure that stores data in an associative array, which is a collection of key-value pairs.<br/><br/>
        
        // These are just a few examples of common data structures. There are many others as well, each with its own set of characteristics and uses.</>,
        image : {img}
    }
];