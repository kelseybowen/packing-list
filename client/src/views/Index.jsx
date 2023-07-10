import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TripForm from '../components/TripForm';
import Weather from '../components/Weather';
import axios from 'axios';

const Index = () => {

    return (
        <div>
            <Navbar />
            <TripForm />
        </div>
    )
}

export default Index