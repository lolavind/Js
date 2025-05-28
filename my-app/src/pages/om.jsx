import React from "react";

const Om = () => {
  return (
    <div>
      

      <h1 className="om_oss">Om oss</h1>

      <div className="rad_1_om">
        <div className="rad_1_text">
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit.
            Fames neque est pellentesque; cubilia vulputate enim tincidunt semper.
            Sociosqu sagittis enim cras quam arcu neque potenti metus blandit.
            Enim eros lacinia ut dignissim egestas natoque.
            Dui phasellus odio auctor taciti massa mauris nibh. Vehicula fringilla urna parturient,
            lorem curae montes? Risus cursus at adipiscing etiam consectetur congue egestas.
            Vel viverra elit vehicula luctus condimentum donec viverra nec.
            Dis bibendum per venenatis vel massa taciti.
          </p>
        </div>
        <div className="rad_1_video">
          <video width="100%" height="100%" controls>
            <source src={"./media/mat.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="rad_2_om">
        <div className="rad_2_bild">
          <img
            width="100%"
            height="100%"
            src={"./img/rad_2_bild.jpg"}
            alt="Bild innuti Eurasia restaurang"
          />
        </div>
        <div className="rad_2_text">
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit.
            Fames neque est pellentesque; cubilia vulputate enim tincidunt semper.
            Sociosqu sagittis enim cras quam arcu neque potenti metus blandit.
            Enim eros lacinia ut dignissim egestas natoque.
            Dui phasellus odio auctor taciti massa mauris nibh. Vehicula fringilla urna parturient,
            lorem curae montes? Risus cursus at adipiscing etiam consectetur congue egestas.
            Vel viverra elit vehicula luctus condimentum donec viverra nec.
            Dis bibendum per venenatis vel massa taciti.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Om;
