import React from 'react';
import './simple_blog.css'

const SimpleBlog = () => {
    return (
        <section className='section_one'>
            <h2>Sample blog post</h2>
            <span>April 1, 2020 by <a href="#">Olivier</a></span>
            <p>This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js.
                <br/>
                <br/>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                <br/>
                <br/>
                Curabitur blandit tempus porttitor. <span className='one'>Nullam quis risus eget urna mollis ornare vel eu leo.</span> Nullam id dolor id nibh ultricies vehicula ut id elit.
                <br/>
                <br/>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
            </p>
            <h3>Heading</h3>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                <br/>
                <br/>
                Sub-heading
                <br/>
                <br/>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                <br/>
                <br/>
                Sub-heading
                <br/>
                <br/>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <ul>
                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue</li>
            </ul>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            <ol>
                <li>Vestibulum id ligula porta felis euismod semper.</li>
                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
            </ol>
            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis</p>
            <br/>
            <h2>Another blog post</h2>
            <span>March 23, 2020 by <a href="#">Matt</a></span>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                <br/>
                <br/>
                Curabitur blandit tempus porttitor. <span className='one'>Nullam quis risus eget urna mollis ornare vel eu leo.</span> Nullam id dolor id nibh ultricies vehicula ut id elit.
                <br/>
                <br/>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                <br/>
                <br/>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <br/>
            <h2>New feature</h2>
            <span>March 14, 2020 by<a href="#"> Tom</a></span>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. </p>
            <ul>
                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue</li>
            </ul>
            <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
        </section>
    );
};

export default SimpleBlog;