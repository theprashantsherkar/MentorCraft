import React from 'react'

function Footer() {
  return (
    <div className="max-w-full container flex items-center justify-between pt-5 pb-5 pl-5 pr-5 bg-gray-800">
  		        <div className="row pl-5">
  			        <div className="col-lg-8 col-xl-7 pl-5 flex items-center justify-between">
  				        <h1 className="text-2xl font-bold text-center pr-5 text-white">
                          © 2024 Mentor<i>Craft</i>
                        </h1>
                        <p className="text-white text-center pt-3 pl-5">
  				        201 South Street, Suite 615 | Boston, MA 02111<br/>
  				        617.303.4600 | <a href="mailto:info@MentorCraft.org">info@MentorCraft.org</a>
				        </p>
  			    </div>
  			    <div className="col-lg-4 col-xl-5 text-center">
  				    <div className="social">
                        <a className="fab fa-facebook-square" href="http://www.facebook.com/MENTORnational" target="_blank" title="Facebook" aria-hidden="true"></a><span className="sr-only">Facebook</span>
                        <a className="fab fa-twitter" href="https://twitter.com/MENTORnational" target="_blank" title="Twitter" aria-hidden="true"></a><span className="sr-only">Twitter</span>
                        <a className="fab fa-youtube" href="https://www.youtube.com/user/mentoringorg" target="_blank" title="YouTube" aria-hidden="true"></a><span className="sr-only">YouTube</span>
                        <a className="fab fa-instagram" href="https://www.instagram.com/MentorNMP" target="_blank" title="Instagram" aria-hidden="true"></a><span className="sr-only">Instagram</span>
                        <a className="fal fa-envelope" href="/home/contact-us/" title="Email" aria-hidden="true"></a><span className="sr-only">Email</span>
                        <a className="fab fa-linkedin" href="https://www.linkedin.com/company/131953" target="_blank" title="LinkedIn" aria-hidden="true"></a><span className="sr-only">LinkedIn</span>
                        <a className="fab fa-medium" href="https://mentornational.medium.com/" target="_blank" title="Medium"></a> 		
                    </div> 
  			</div>
  		</div>
		<div className="row">
			<div className="col-12 text-center text-white pr-5 ">
				<a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
			</div>
		</div>
  	</div>
  )
}

export default Footer