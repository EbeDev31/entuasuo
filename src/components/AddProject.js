import React, { useState } from 'react'
import AddNewIcon from '../entuasoAsset/icons/AddNew'
import Header from './common/Header'
import styles from './styles/AddProject.module.scss'
const AddProject = ({ closeModal, addProject }) => {

    const [projectName, setProjectName] = useState('')
    const [image, setimage] = useState(null)
    const [loading, setLoading] = useState(false)
    let imageRef

    const changeProjectName = (e) => {
        setProjectName(e.target.value)
    }
    const handleImageChange = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setimage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
        console.log(e.target.files[0])
    }

    const saveProject = () => {
        addProject(projectName, image)
    }

    return (
        <div className={styles.modalBackGround}>
            <div style={{ background: 'orange', position: 'relative', padding: '30px 10px 10px 10px' }}>
                <Header left={'cancel'} leftAction={closeModal} center={'Add New Project'} right={'save'} rightAction={saveProject} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' value={projectName} onChange={changeProjectName} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                    <label htmlFor='password'>Password?</label>
                    <div style={{ marginLeft: 50, display: 'flex', flexDirection: 'column' }}>
                        <input type='text' id='password' />
                        <input type='text' />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                    <input
                        type='file'
                        ref={ref => imageRef = ref}
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleImageChange} />
                    <label htmlFor='image'>image</label>
                    <div onClick={() => imageRef.click()} className={styles.imageInput}>
                        <div className={styles.image}>
                            {
                                image &&
                                <img alt='backgorundImage' src={image} style={{ height: '100%', width: '100%' }} />
                            }
                            {
                                loading &&
                                <p>We Are Loading...................</p>
                            }
                            {
                                !image && !loading &&
                                <AddNewIcon />
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddProject
