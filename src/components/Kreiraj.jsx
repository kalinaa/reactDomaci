import React, { useState } from 'react'

export default function Kreiraj(props) {
    const [rec, setRec] = useState('')
    return (
        <div className='container'>
            <div className='row mt-2'>
                <form >
                    <label>Rec</label>
                    <input type="text" className='form-control' value={rec} onChange={(e) => {
                        const value = e.target.value;

                        setRec(value);
                    }} />
                    <button className='btn btn-primary form-control mt-2' onClick={(e) => {
                        e.preventDefault();
                        if (rec.trim().length < 3) {
                            alert('Rec mora imati minimalno 3 slova');
                            return;
                        }
                        props.kreiraj(rec);
                    }}>Kreiraj</button>
                </form>

            </div>
        </div>
    )
}
