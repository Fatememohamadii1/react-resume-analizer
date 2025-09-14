import React, { useState, type FormEvent } from 'react'
import Navbar from '~/components/navbar';
import FileUploader from '~/components/fileUploader';
import { log } from 'console';

const upload = () => {
    const[isProcessing, setIsProcessing]= useState(true);
    const[statusText, setstatusText]=useState();
    const[file,setFlie] = useState<File | null >(null);
    const handleFilesSelect =(file:File | null) =>{
        setFlie(file)
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form =e.currentTarget.closest('form');
        if(!form) return;
        const formData = new FormData(form);

        const companyName = formData.get('company-name');
        const jobTitle = formData.get('job-title ');
        const jobDescription = formData.get('job-description');

        console.log({companyName,jobDescription,jobTitle,file});
        
    }
  return (
    <main className="bg-[url('images/bg-main.svg')] bg-cover">
    <Navbar/>
   <section className="main-section">
        <div className='page-heading py-16'>
            <h1>smart feedback for your dream job</h1>
            {isProcessing ? (
                <>
                <h2>{}statusText</h2>
                <img src="/images/resume-scan.gif" className='w-full' />
                </>
            ) : (
                <h2>Drop your resume for ATS score and improvement tips</h2>
            )}
            {isProcessing && (
                <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                        <div className='form-div'>
                            <label htmlFor="company-name">Company Name</label>
                            <input type="text" name='company-name'placeholder='Company Name' id='company-name' />
                        </div>
                        <div className='form-div'>
                            <label htmlFor="job-title">job Title</label>
                            <input type="text" name='job-title'placeholder='Job Title' id='job-title' />
                        </div>
                        <div className='form-div'>
                            <label htmlFor="job-description">job description</label>
                            <textarea rows={5} name='job-description'placeholder='Job Description' id='job-description' />
                        </div>
                        <div className='form-div'>
                            <label htmlFor="uploader">Upload Resume</label>
                            <FileUploader onFileSelect={handleFilesSelect}/>
                        </div>
                        <button className='primary-button' type='submit'>
                            Analyze Resume 
                        </button>
                </form>
            )}

        </div>
   </section>
   </main>
  )
}

export default upload