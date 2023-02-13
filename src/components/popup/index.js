import React from "react";

function Popup({ status, setStatus }) {
  const cancel = ()=> {setStatus(null)}
  return (
    <div>
      <div className="popup" onClick={cancel}></div>
      <div className="popup-container">
        <h2>{status && status}</h2>
        {status === "Project" ? (
          <div className="popup-content">
            Name<span> *</span>
            <input />
            Keywords
            <input />
            <div className="project">
              <div className="project-key">
                #solar_breeze <span>x</span>
              </div>
              <div className="project-key">
                #red_hold <span>x</span>
              </div>
              <div className="project-key">
                #card_guard <span>x</span>
              </div>
              <div className="project-key">
                #lotstring <span>x</span>
              </div>
              <div className="project-key">
                #tough_joy_fax <span>x</span>
              </div>
              <div className="project-key">
                #cardify <span>x</span>
              </div>
            </div>
            <div style={{ padding: "30px 0" }}>
              Summary<span> *</span>
              <textarea
                defaultValue={
                  "Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio	feugiat non pretium quis lectus suspendisse."
                }
              />
            </div>
            Websites
            <br />
            <input style={{ width: "60%" }} />
            <select>
              <option value="option">option</option>
              <option value="option">option1</option>
              <option value="option">option2</option>
            </select>
            <span style={{position: "absolute"}}>Remove</span>
            <p>Add another website</p>
          </div>  
        ) : (
          <>
            {status === "Description" ? (
               <>
              
                 <div className="popup-content">
                <img src="./assets/image/ka.png" alt="" />
               
                 {/* <img src="./assets/image/image.png" /> */}
                <div className="popup-description">
                  <ul style={{border: "1px solid #AEAEAE",padding: "12px 28px"}}>
                    <li style={{padding:"8px 0px"}}>Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel nasand praesent blandit lacinia erat vestibulum sed.</li>
                    <li style={{padding:"8px 0px"}}>Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.
</li>
                    <li style={{padding:"8px 0px"}}>Liam neque vestibulum eget vulputate ut ultrices vel.
</li>
                 
                    <p style={{position:"absolute",bottom:"91px",right:"28px",fontSize:"inherit"}}>320/500</p>
                  
                  </ul>
                </div>
              </div>
               </>
            
            ) : (
              <div className="popup-content">
                 <img src="./assets/image/Rectangle 2.1.png" style={{width: "200px",height:"200px"}} />
                 <div className="popup-content1" style={{marginTop:"-215px",marginLeft:"188px"}}>
                 <div >
              title<span> *</span>
              <textarea style={{height:"10px",background:"#F3F3F3"}}
                defaultValue={
                  "Getting stakeholder"
                }
              />
            </div>
            <div >
            Description <span> *</span>
            <textarea style={{background:"#F3F3F3"}}
                defaultValue={
                  "Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at."
                }
              />
            </div>
            </div>
            <img src="./assets/image/Rectangle 2(4).png" style={{width: "200px",height:"200px",marginLeft:"-10px"}} />
            <div className="popup-content2" style={{marginTop:"-215px",marginLeft:"188px"}}>
            <div >
              title<span> *</span>
             <textarea style={{height:"10px",background:"#F3F3F3"}}
                defaultValue={
                  "User interaction"
                }
              />
                <p style={{position:"absolute",top:"390px",right:"27px",fontSize:"inherit"}}>145/500</p>
            </div>
            <div>
            Description <span> *</span>
              <textarea style={{background:"#F3F3F3"}}
                defaultValue={
                  "Sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt anteca veal ipsum praesent blandit lacinia erat vestibulum sed at magna."
                }
              />
              <p style={{position:"absolute",top:"216px",right:"27px",fontSize:"inherit"}}>145/500</p>
            </div>
                
            </div>  
            <p>Add another feature
</p>
                 
              </div>
            )}
          </>
        )}
        <div className="popup-footer">
          <button onClick={cancel}>Cancel</button>
          <button onClick={cancel}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
