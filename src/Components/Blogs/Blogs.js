import React from 'react';

const Blogs = () => {
    return (
        <div className='p-6 text-lg text-gray-800'>
            <h1 className='text-2xl text-red-800 font-semibold my-4'>What is Context API ?</h1>
            <p>Context API lets us use data or functionality of a grand parent component or a parent component into child or grand child components without passing the props through components. So Context API avoids the props drilling from component to components and the data or the functionality can be directly passes from a parent component to it's specific child component. From parent component to its child or grand child components, we can pass and use states, functions, event handlers, and so on through Context API.</p>
            <h1 className='text-2xl text-red-800 font-semibold my-4'>What is Semantic Tag ?</h1>
            <p>Tags, which clearly describes their purposes are Semantic Tags. A semantic tag clearly describes its meaning both to the browser and the developer himself.<code> &lt;haeder&gt;, &lt;main&gt;, &lt;footer&gt;, &lt;aside&gt;, &lt;nav&gt; </code> these are semantic tags, as they represent the contents positioning in the UI. <code>&lt;strong&gt;, &lt;small&gt;, &lt;article&gt;, &lt;section&gt;</code> these are also semantic tags.</p>
            <h1 className='text-2xl text-red-800 font-semibold my-4'>Difference between Block, Inline & Inline Block level Elements ?</h1>
            <p>
                • A Block level element always starts on a new line. An Inline and Inline block level element do not starts on a new line. <br /> 
                • A Block level element always takes up the full width available. An Inline element takes up as much width as necessary. <br />
                • We can set or change the height, width of Block and Inline block element. But we can't set or change the height and width of an Inline element. <br />
                • Inline block elements are normally represented as Inline element but they behaves like Block element. <br />
                • We can change elements behavior by css "display" property. <br />
                • Tags, such as <code>&lt;div&gt;, &lt;header&gt;, &lt;section&gt;, &lt;article&gt;, &lt;p&gt;, &lt;h1-h6&gt;</code> are Block elements. <code> &lt;span&gt;, &lt;a&gt;, &lt;strong&gt;, &lt;bold&gt;, &lt;input&gt;, &lt;button&gt;, &lt;image&gt;,</code> are Inline elements.  &lt;button&gt;, &lt;image&gt; these are by default Inline block elements.</p>
        </div>
    );
};

export default Blogs;