import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pics.'}
            </p>
            <div className='center'>
                <div className='pa4 br3 shadow-5 center' style={{ width: '700px', background: 'gray'}}>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        style={{ cursor: 'pointer'}} 
                        onClick={onButtonSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;