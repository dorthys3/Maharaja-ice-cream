import Firstpg from './Firstpg';
import logo3 from './assets/logo3.png'

const Secondpg = () => {
  return (
    <div>
      <section id="homepg">
          <div className="Welcome-txt">
              <h2><center><b>WELCOME TO MAHARAJA ICECREAM</b></center></h2>
          </div><br></br><br></br>
          <div className="Welcome-content">
              <div className="row">
                  <div className="col-lg-6 col-md-1 col-sm-12 col-xs-12">
                      <img
                        src={logo3}
                        alt="noimg"
                        style={{
                          width: '100%',
                          height: 'auto',
                          maxWidth: '400px',
                          display: 'block',
                          margin: '0 auto'
                        }}
                      />
                  </div>
                  <div className="col-lg-6 col-md-1 col-sm-12 col-xs-12" style={{textAlign:'justify'}}>
                      <h2>A Creamy Delight That</h2>
                      <h2>Challenges Your Taste</h2><br></br>
                      <p><strong>Maharaja Ice cream </strong>spreads the happiness <strong>across India</strong> to people of all ages. We are known to be beating the heat with refreshing and healthy Fruttare, professing your love with  crunching away all your worries with our <strong>ice cream </strong>feast that brightens your dull day with our <strong>delicious ice cream, sharing sweet victories</strong> with your beloved ones with <strong>Kulfeez or special experience</strong> with frozen treat in your life. <strong>Maharaja Ice cream</strong> is committed to excellence and zeal in <strong>this field since 2004.</strong> We are known to be dedicated in <strong>manufacturing and marketing</strong> world class quality superior ice cream made with <strong>pure milk and cream.</strong> Our main aim is to always determine in <strong>maintaining integrity and commitment in providing quality and value.</strong> We provide delicious ice cream at reasonable price.Whether you’re cooling off with our refreshing and <strong>healthy Fruttare</strong>
                      , sharing a crunchy cone with a loved one, enjoying a Kulfeez after dinner, or brightening a dull day with a <strong>creamy scoop</strong>, we have something for every mood and moment. Known for our dedication to excellence, we take pride in crafting world-class ice cream that is not only tasty but also <strong>hygienically </strong> produced and affordably priced. At Maharaja, we believe in maintaining integrity, delivering value, and <strong>making premium ice cream</strong>accessible to everyone. Our journey from a small manufacturing unit to a beloved brand reflects our commitment to quality, <strong>customer satisfaction</strong>, and innovation in every bite. Come, experience the royal taste with Maharaja Ice Cream – where every scoop is a <strong>celebration!</strong>
                      </p>
                  </div>
              </div>
          </div><br></br><br></br>
          <div className="button-1" >
          <center><button type="button"><strong>Contact Us Today</strong></button></center>
          </div>
      </section><br></br><br></br>
    </div>
  )
}

export default Secondpg
