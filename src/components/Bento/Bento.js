import React from 'react';
import '../Bento/Bento.css';
import CustomCard from '../card/card';
function Carausal() {
  return (
    <>
        <section className='bentoMainContainer'>
            <div className='bentoContainer'>
                <div className='row row1'>
                    <div className='row1col1'>
                        <CustomCard iname = "home" cardHeading = "Presonalised Dashboard" cardBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante. Sed feugiat lorem vel velit. Quisque sed ullamcorper arcu. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Praesent vestibulum dapibus nibh. Pellentesque habitant morbi tristique senectus et netus."></CustomCard>
                    </div>
                    <div className='row1col2'>
                        <CustomCard iname = "edit" cardHeading= "Create Presonalised Form" cardBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante. Sed feugiat lorem vel velit. Quisque sed ullamcorper arcu. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Praesent vestibulum dapibus nibh. Pellentesque habitant morbi tristique senectus et netus."></CustomCard>
                    </div>
                </div>
                <div className='row row2'>
                    <div className='row2col1'>
                        <CustomCard iname = "hub" cardHeading = "Join quizes" cardBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante. Sed feugiat lorem vel velit. Quisque sed ullamcorper arcu. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Praesent vestibulum dapibus nibh. Pellentesque habitant morbi tristique senectus et netus."></CustomCard>
                    </div>
                    <div className='row2col2'>
                        <CustomCard iname = "wifi" cardHeading = "Easily Share with others" cardBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante. Sed feugiat lorem vel velit. Quisque sed ullamcorper arcu. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Praesent vestibulum dapibus nibh. Pellentesque habitant morbi tristique senectus et netus."></CustomCard>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
export default Bento;