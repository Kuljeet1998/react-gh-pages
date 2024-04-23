import React, { FC } from 'react';
import './education.css'

function Education () {
   return (
      <div>
         <table>
            <tr>
               <th className='section'>EDUCATION</th>
               <th>George Mason University</th>
            </tr>
            <tr>
               <td></td>
               <td className='pursue'>Masters in Computer Science • <span className='graduation'>Graduating May 2024 </span></td>
            </tr>
            <tr>
               <td></td>
               <td className='not-important'>Relevant Coursework: Analysis of Algorithms, Machine Learning, Data Mining, Software Design and Architecture</td>
            </tr>
            <tr>
               <td></td><td></td>
            </tr><br></br><br></br>
            <tr>
               <th></th>
               <th>University of Mumbai</th>
            </tr>
            <tr>
               <td></td>
               <td className='pursue'>Bachelors in Information Technology • <span className='graduation'>Class of 2020</span></td>
            </tr>
            <tr>
               <td></td>
               <td className='not-important'>Relevant Coursework: Algorithms, Databases, DevOps, Cloud Computing, Big Data Analytics, Operating Systems</td>
            </tr>
         </table>
      </div>
   )
}

export default Education;
