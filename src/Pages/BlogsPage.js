import React from 'react';
import allBlogs from '../Components/AllBlogs';
import Title from '../Components/Title';

const BlogsPage = () => {
    return (
        <div>
            <div className="b-title">
                 <Title title={'My Blogs'} span={'Recent blogs'}></Title>
            </div>
            <div className="BlogsPage">
                {
                    allBlogs.map((blog) => {
                        return <div className="blog" key={blog.id}>
                                    <div className="blog-content">
                                        <img src={blog.image} alt=""/>
                                        <a href={blog.link} className="blog-link">
                                            {blog.title}
                                        </a>
                                    </div>
                                </div>
                    })
                }
            </div>
        </div>
    );
};

export default BlogsPage;