import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 gap-10 px-5 lg:px-[200px] mt-20 mb-5 blog">
      <h2 className="text-4xl text-center gradient-text pb-2">Blog Page</h2>

      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p>
            Refresh tokens ensure a more seamless authentication experience by
            allowing a user to obtain new access tokens without having to
            re-authenticate. This is done by using a long-lived refresh token to
            obtain new access tokens, even after the original access token has
            expired. Typically, when a user logs in, the server generates a pair
            of tokens, an access token and a refresh token. The access token has
            a short lifetime and is used to authenticate the user and grant them
            access to protected resources. The refresh token has a longer
            lifetime and is used to obtain new access tokens after the original
            access token has expired. It should be store in http cookies , you
            can also store in browser local storage.
          </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
          <p>
            SQL is a programming language used to manage and modify structured
            data in a relational database management system. SQL is used to
            create, modify, and query relational databases that drive
            applications used in e-commerce platforms, financial management
            systems, healthcare solutions, and more. Relational databases
            organize data in tables. Data engineers can define relationships
            between tables using primary and foreign keys. They can create
            views, indexes, and triggers for additional functionality. SQL
            statements enable database operations, including creating tables,
            inserting, updating, and retrieving data. Relational databases can
            handle complex queries needed for data analytics and business
            intelligence. Using structured query language, users specify exactly
            what data they need and how it should be retrieved. This improves
            query performance and reduces the amount of data transferred over a
            network. NoSQL databases are non-relational databases used to store
            and manage unstructured and semi-structured data, such as social
            media posts, sensor data, and log files. They provide the added
            flexibility and scalability needed to match the use cases of modern
            data teams. These databases use flexible schemas for data storage.
            They support varying data models, such as key-value, document,
            column-family, and graph. This gives data engineers the freedom to
            design their schema and store different data structures within the
            same database. Non-relational databases can support read-heavy and
            write-heavy workloads using distributed architectures and optimized
            data models.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is express js? What is Nest JS ?</h2>
          <p>
            Node JS is a flexible and powerful JavaScript runtime engine based
            on Chrome’s V8, facilitating the creation of network applications
            with ease. In contrast, Nest JS is a framework that runs on Node JS
            and offers a suite of libraries and abstractions for developing
            server-side applications quickly and efficiently. It is built on
            Node JS and uses Express as its internal web framework by default.
            Nest.js is a Node.js – based web development framework that uses
            TypeScript to provide a highly scalable and robust programming
            framework.It takes inspiration from other popular development
            frameworks, such as Angular and Spring, and focuses on building
            highly scalable and modular backend applications, although you can
            also develop web applications.It is compatible with and includes
            out-of-the-box integrations with a wide variety of databases and
            authentication systems, and you can use it with a wide variety of
            third-party modules to add additional functionality. Additionally,
            it integrates with testing and debugging tools to help test and
            debug your application code.
          </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is MongoDB aggregate and how does it work ?
          </h2>
          <p>
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. The stages in a pipeline
            can filter, sort, group, reshape and modify documents that pass
            through the pipeline.One of the most common use cases of Aggregation
            is to calculate aggregate values for groups of documents. This is
            similar to the basic aggregation available in SQL with the GROUP BY
            clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes
            further though and can also perform relational-like joins, reshape
            documents, create new and update existing collections, and so on.
            While there are other methods of obtaining aggregate data in
            MongoDB, the aggregation framework is the recommended approach for
            most work.The input of the pipeline can be a single collection,
            where others can be merged later down the pipeline. The pipeline
            then performs successive transformations on the data until our goal
            is achieved. This way, we can break down a complex query into easier
            stages, in each of which we complete a different operation on the
            data. So, by the end of the query pipeline, we will have achieved
            all that we wanted. This approach allows us to check whether our
            query is functioning properly at every stage by examining both its
            input and the output. The output of each stage will be the input of
            the next.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
