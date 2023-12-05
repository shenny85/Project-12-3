import Navbar from "../Pages/Navbar";
import './Plumbing.css'



const Plumbing = () => {

  const handleClick = () => {
    
    //redirect to add a job form//
    console.log("Take me to the flooring form");
  }

  const handleClickAgain = () => {
    console.log("consult");
  }
   return(
<>
       <nav className="bg-black navbar-dark py-3">
     <div className="col-sm fs-5  pt-2  navbar-brand fs-2 ps-5"> 
       <div className=" justify-content-center">
         <img src="https://i.postimg.cc/wBf3kxrr/Final-Logo-2.png" width="200" height="120" alt="Logo"></img>
     </div>
   </div>
   <div className="row"/>
     <div className="btn toolbar align-items-center"> <Navbar /></div>
     </nav>
     
 
        <div className="container fs-2 p-3 fw-bold text-center">
        Plumbing Services</div>
       {/*<div classNameName="btn-toolbar"><button>Request Service</button><button>Apply to Request</button></div> */}

       <div className="container p-3">
       <div className="col-sm col p-4 fs-2">
         <p>IndyFIXER allows experienced individuals in plumbing to offer their expertise to help serve the public in need quick services.  We are well qualified to meet your needs and deliver 100% satisfaction.  With our job right guarantee you can schedule with confidence and know that our job isn't done until it meets the customer standards. </p>
       </div>


  
    <div className="container row bg-white-subtle p-4 ">
    <div className="col-sm col">  
       <div className="card h-100" style={{width: 225}}>
       <img src="https://i.postimg.cc/SRzRdYBb/Getty-Images-1221145802-edited.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Drain Cleaning</h5>
     </div> </div></div>
     <div className="col-sm col"> 
         <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/rFkRjQwh/plumbing-water-heaters-9-by-4.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Water Heater Repair</h5>
     </div> </div></div>
     <div className="col-sm col"> 
         <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/J4GvTcYk/image.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Commercial Plumbing</h5>
     </div> </div></div>
     <div className="col-sm col"> 
         <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/Ls0ky7Cd/image.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Water Leak Repair</h5>
     </div> </div></div>
    
  <div className="card-footer  text-muted">
  <h5 className="card-title">
          <a href="/AddJob" className="btn btn-primary mt-3" onClick={handleClick}>Post A Job Request</a>
            <a href="/Consult" className="btn btn-primary mt-3"onClick={handleClickAgain}>Request Consultation</a></h5>
            </div>
            </div>
            </div>
         

           
 


           {/*     <div classNameName="container align-items-lg-stretch">
   <div classNameName="container row bg-white-subtle p-4 justify-content-around">
       <div classNameName="col-sm col mb-5">  
       <div classNameName="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/SRzRdYBb/Getty-Images-1221145802-edited.jpg" classNameName="card-img-top" alt="..." width="150px" height="150px"/>
         <div classNameName="card-body border primary">
         <h5 classNameName="card-title">Drain Cleaning</h5>
           <h5 classNameName="card-title">
           <a href="/AddJob" classNameName="btn btn-primary mt-3" onClick={handleClick}>Post A Job Request</a>
            <a href="/Consult" classNameName="btn btn-primary mt-3"onClick={handleClickAgain}>Request Consultation</a>
           </h5>
         </div>
         </div>
         </div>

    <div classNameName="col-sm col mb-5"> 
         <div classNameName="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/rFkRjQwh/plumbing-water-heaters-9-by-4.jpg" classNameName="card-img-top" alt="..." width="150px" height="150px"/>
         <div classNameName="card-body border primary">
         <h5 classNameName="card-title">Water Heater Repair</h5>
           <h5 classNameName="card-title">
           <a href="/AddJob" classNameName="btn btn-primary mt-3" onClick={handleClick}>Post A Job Request</a>
            <a href="/Consult" classNameName="btn btn-primary mt-3"onClick={handleClickAgain}>Request Consultation</a>
           </h5>
         </div>
         </div>
         </div>
        
         
       
        <div classNameName="col-sm col mb-5"> 
         <div classNameName="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/J4GvTcYk/image.jpg" classNameName="card-img-top" alt="..." width="150px" height="150px"/>
         <div classNameName="card-body border primary">
         <h5 classNameName="card-title">Commercial Plumbing</h5>
           <h5 classNameName="card-title">
           <a href="/AddJob" classNameName="btn btn-primary mt-3" onClick={handleClick}>Post A Job Request</a>
            <a href="/Consult" classNameName="btn btn-primary mt-3"onClick={handleClickAgain}>Request Consultation</a>
           </h5>
         </div>
         </div>
         </div>
     
       {/* <div classNameName="col-sm col mb-5"> 
         <div classNameName="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/Ls0ky7Cd/image.jpg" classNameName="card-img-top" alt="..." width="150px" height="150px"/>
         <div classNameName="card-body border primary">
         <h5 classNameName="card-title">Water Leak Repair</h5>
           <h5 classNameName="card-title">
           <a href="/AddJob" classNameName="btn btn-primary mt-3" onClick={handleClick}>Post A Job Request</a>
            <a href="/Consult" classNameName="btn btn-primary mt-3"onClick={handleClickAgain}>Request Consultation</a>
           </h5>
           </div>
         </div>
         </div>
         </div>
         </div> */}
      
      <p className="col-sm col p-4 fs-2">
           If you have any questions or would like ideas before you create a job, please request an online consultation to ensure we can handle your request in the most efficient way to meet your needs.  If you are ready to schedule click the add a job tab above and someone will contact you.
         </p>
      
       <div className="col-sm fs-5 fs-2">           
    <footer className="bg-black text-white text-center position-relative">
        <p className="lead pb-3">Copyright &copy; 2023 IndyFIXER</p>
        <div  className="position-absolute bottom-0 end-0">
    </div>
</footer>
       </div>

     
   

  
     
     </>
   )
 }
 
 export default Plumbing;
         
        
    