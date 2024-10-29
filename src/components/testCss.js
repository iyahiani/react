import {Outlet} from "react-router-dom";

const  TestCss = () =>{
    return(
        <>
        <body >
        <section className="bg-warning m-5 d-flex flex-column flex-md-row-reverse" >
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
        </section>
        <section className="bg-warning m-5 d-flex justify-content-center justify-content-md-start align-items-stretch align-items-md-baseline" style={{height:"200px"}}>
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
        </section>
        <section className="bg-warning m-5 d-flex" style={{height:"200px"}}>
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
            <div className="border border-primary p-3 align-self-center">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
            <div className="border border-primary p-3">neque volumus in duis dolorum partiendo tincidunt nonumy </div>
        </section>
        </body>
            <Outlet></Outlet>
        </>
    )
}
export default TestCss ;
