import logo18 from './assets/logo18.jpg'
const Sixthpg = () => {
  return (
    <div>
       <div className="contact-title">
                  <center><strong><h1 style={{color:'#a10a62'}}>CONTACT US</h1></strong><br></br><br></br>
                  <h4>Main Office</h4>
                  <h5><i class="fa fa-map-marker"></i> No.14/2, Police manickam Street, Ayanavaram,Chennai - 600 023</h5></center>
                  <center><img src={logo18} alt="noimg"/></center><br></br>
                  <div className="last-content">
                                  <center><div className="last-content-1">
                                      <h3>RETAIL</h3>
                                     <h5>No.14/2, Police manickam Street, Ayanavaram,Chennai - 600 023</h5>
                              </div><br></br><br></br>
                                  <div className="last-content-2">
                                      <h3>OPENING HOURS</h3>
                                      <h4>Monday to Saturday</h4>
                                      <h4>7am to 11pm</h4>
                                  </div></center>
                                  </div>
              </div><br></br><br></br>

              
    <form>   
        <center>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{fontWeight:'bold'}}/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div><br></br>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" style={{fontWeight:'bold'}}/>
        </div><br></br>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{fontWeight:'bold'}}/>
            <label class="form-check-label" for="exampleCheck1" style={{fontWeight:'bold'}}>Check me out</label>
        </div><br></br>
        <button type="submit" class="btn btn-primary">Submit</button>
        </center>
   </form>
    </div>
  )
}

export default Sixthpg
