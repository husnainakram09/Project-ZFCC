import React, { useState, useContext } from 'react'
import { GlobalContext } from './../ContextApi/GlobalState'
import { useHistory } from 'react-router-dom'


function MatchDetails() {

    var myCurrentDate = new Date();
    var date = myCurrentDate.getDate() + '/' + (myCurrentDate.getMonth() + 1) + '/' + myCurrentDate.getFullYear();
    const newCurrentDate = date;

    let History = useHistory();


    const intialFormData = {
        match: "",
        totalovers: "",
        locations: "",
        matchdate: newCurrentDate,
        teama: "",
        teamb: ""
    }



    const { addNewMatch } = useContext(GlobalContext)
    const [formData, setFormData] = useState(intialFormData)

    const handleChange = (e) => {


        setFormData({
            ...formData,


            // Trimming any whitespace
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData)
        const newMatch = {
            match: formData.match,
            totalovers: formData.totalovers,
            locations: formData.locations,
            matchdate: formData.matchdate,
            teama: formData.teama,
            teamb: formData.teamb
        }

        addNewMatch(newMatch);
        History.push("/teamplayer");
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="matchno">Match No.</label>
                <input type="text" name="match" value={formData.match} onChange={handleChange} />
                <br />

                <label htmlFor="noofovers">No. of Overs</label>
                <input name="totalovers" value={formData.totalovers} onChange={handleChange} />
                <br />

                <label htmlFor="location">Location</label>
                <input type="text" name="locations" value={formData.locations} onChange={handleChange} />
                <br />

                <label htmlFor="dateofmatch">Date of Match</label>
                <input type="text" name="matchdate" value={formData.matchdate} onChange={handleChange} />
                <br />

                <label htmlFor="teama">Team A Name</label>
                <input type="text" name="teama" value={formData.teama} onChange={handleChange} />
                <br />

                <label htmlFor="teamb">Team B Name</label>
                <input type="text" name="teamb" value={formData.teamb} onChange={handleChange} />
                <br />

                <button type="submit">update Details</button>
            </form>
        </div>
    );
}
export default MatchDetails;