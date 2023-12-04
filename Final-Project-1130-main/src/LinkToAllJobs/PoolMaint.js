import Navbar from "../Pages/Navbar";
import './PoolMaint.css'


const PoolMaint = () => {
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
       Pool Maintenance Services</div>
       {/*<div className="btn-toolbar"><button>Request Service</button><button>Apply to Request</button></div> */}

       <div classname="container p-3">
       <div className="col-sm col p-4 fs-2">
         <p>IndyFIXER allows experienced individuals in pool maintenance to offer their expertise to help serve the public in need quick services.  We are well qualified to meet your needs and deliver 100% satisfaction.  With our job right guarantee you can schedule with confidence and know that our job isn't done until it meets the customer standards. </p>
       
         <div className="container align-items-lg-stretch">
   <div className="container row bg-white-subtle p-4 justify-content-around">
       <div className="col-sm col mb-5">  
       <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/rsY39gBQ/Additional-Services-Page-e1496845171159.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Brush and/or Vacuum Pool</h5>
           <h5 className="card-title">
           <a href="#" className="btn btn-primary mt-3">Apply To Job Request</a>
           <a href="#" className="btn btn-primary mt-3">Request Consultation</a>
           </h5>
         </div>
         </div>
         </div>

         <div className="col-sm col mb-5"> 
         <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/fR63PN7h/pool-skimmer-basket.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Cleaning of Skimmer and/or Pump</h5>
           <h5 className="card-title">
           <a href="#" className="btn btn-primary mt-3">Apply To Job Request</a>
           <a href="#" className="btn btn-primary mt-3">Request Consultation</a>
           </h5>
         </div>
         </div>
         </div>
        
         
       
         <div className="col-sm col mb-5"> 
         <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/02NRTKZp/inventory.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Chemical Testing and Adding</h5>
           <h5 className="card-title">
           <a href="#" className="btn btn-primary mt-3">Apply To Job Request</a>
           <a href="#" className="btn btn-primary mt-3">Request Consultation</a>
           </h5>
         </div>
         </div>
         </div>
     
         <div className="col-sm col mb-5"> 
         <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/DZbmjnmN/The-Cyclone-Filter-Cleaning-System-3.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Pool Filter Cleaning</h5>
           <h5 className="card-title">
           <a href="#" className="btn btn-primary mt-3">Apply To Job Request</a>
           <a href="#" className="btn btn-primary mt-3">Request Consultation</a>
           </h5>
           </div>
         </div>
         </div>
         </div>
         </div>
      
         <p>
           If you have any questions or would like ideas before you create a job, please request an online consultation to ensure we can handle your request in the most efficient way to meet your needs.  If you are ready to schedule click the add a job tab above and someone will contact you.
         </p>
       </div>
       </div>

     
   

  
     
     </>
   )
 }
 
 export default PoolMaint;
         
        
    