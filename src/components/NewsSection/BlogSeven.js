import { blogSeven, blogSevenSpanish } from "@/data/newsSection";
import { Row } from "react-bootstrap";
import SingleBlogSeven from "./SingleBlogSeven";
import { useRouter } from "next/router";

const BlogSeven = () => {
  const { pathname } = useRouter();

  return (
    <section className="blog-seven">
      <div className="auto-container">
        <div className="sec-title-seven text-center">
          {pathname.split("/")[1] === "es" ? (
            <h2 className="sec-title-seven__title">
              Últimas <span>Noticias</span> y
              <br />
              artículos del Blog
            </h2>
          ) : (
            <h2 className="sec-title-seven__title">
              Latest News & <span>Articles</span>
              <br />
              from the Blog
            </h2>
          )}
        </div>
        <Row>
          {pathname.split("/")[1] === "es"
            ? blogSevenSpanish.map((blog) => (
                <SingleBlogSeven blog={blog} key={blog.id} />
              ))
            : blogSeven.map((blog) => (
                <SingleBlogSeven blog={blog} key={blog.id} />
              ))}
        </Row>
      </div>
    </section>
  );
};

export default BlogSeven;
