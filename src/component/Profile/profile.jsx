import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {

    pushStuff = (c) =>{
        let stuff = JSON.parse(localStorage.getItem("stuff"));
        let index = stuff.indexOf(c);
        if (index === -1){
            stuff.push(c);
        }
        localStorage.setItem("stuff", JSON.stringify(stuff));
    }
    

    renderProfile = (name, sex, age, zodiac, interest, c) => {
    	return(
    		<div className="col-lg-6 col-12">
                <div className="profile-item">
        			<p> Name: { name }</p>
        			<p> Sex: { sex }</p>
        			<p> Age: { age }</p>
        			<p> Zodiac: { zodiac }</p>
        			<ul>
        				<p>Interest:</p>
        				{ interest.map((item,key) => <li key={key}>{ item }</li>) }
        			</ul>
                    <div id={c} onClick={()=> this.pushStuff(c)}></div>
                </div>
    		</div>
    	);
    }

    render() {
        return (
            <div>
    			<div className="profile-tab">
    				<div className="aa container-fluid">
                        <div className="duck">
                            <img src="https://res.cloudinary.com/buituan/image/upload/v1569239394/Hpbd/vit.png" alt=""/>
                        </div>
                        <div className="row">
                            { this.renderProfile('Bùi Tuấn', 'Boy', '20', 'Libra', ['Game','Eat','Basketball','YOU'],"stuff-a") }
                            { this.renderProfile('Trang Ốc', 'Girl', '18', 'Scorpius', ['Sleep','Shoes','Draw','Volleyball'],"stuff-b") }
                        </div>
                    </div>

    			</div>            
                
            </div>
        );
    }
}
export default Profile;



