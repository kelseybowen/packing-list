import React, { useState } from 'react';


const TripForm = () => {

    const [formIsShowing, setFormIsShowing] = useState(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    return (
        <div>
            {!formIsShowing && 
            <div>
                <button className='btn btn-primary' onClick={() => setFormIsShowing(true)}>Plan a Trip</button>
            </div>
            }
            {formIsShowing &&
                <form className='mx-auto p-4'>
                    <div><h1>New Trip</h1></div>
                    <div className="form-group">
                        <label className='form-label' htmlFor="personList">Packing For</label>
                        <select class="form-select" aria-label="Select person to pack for">
                            <option selected>Select...</option>
                            <option value="Kelsey">Kelsey</option>
                            <option value="David">David</option>
                            <option value="Maisy">Maisy</option>
                            <option value="Rhys">Rhys</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className='form-check-label' htmlFor="weather">Weather</label>
                        <div className="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkCold" />
                            <label htmlFor="checkCold">Cold</label>
                        </div>
                        <div className="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkMild" />
                            <label htmlFor="checkMild">Mild</label>
                        </div>
                        <div className="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkHot" />
                            <label htmlFor="checkHot">Hot</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className='form-check-label' htmlFor="activities">Activities</label>
                        <div className="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkSnow" />
                            <label htmlFor="checkSnow">Snow</label>
                        </div>
                        <div className="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkSwim" />
                            <label htmlFor="checkSwim">Swim</label>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-primary' type="submit">Generate Packing List</button>
                    </div>
                </form>
            }
        </div>
    )
}

export default TripForm