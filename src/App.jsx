import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <header class="flex relative padding_2">
        <article class="relative padding_4">
          <h5 class="sub_title tag">Welcome To My Docker Hosted Website</h5>
          <h3 class="title big"><b>Virtualization and Cloud Computing</b></h3>
          <p>Assignment No 1</p>
          <aside class="buttons fixed_flex">
            <a href="javascript:void(0)" class="btn btn_1">Due Date: </a>
            <a href="javascript:void(0)" class="btn btn_2">21/07/2024</a>
          </aside>
          <p>Submitted By</p>
          <aside class="buttons fixed_flex">
            <a href="javascript:void(0)" class="btn btn_1">SHUBHAM RAJ</a>
            <a href="javascript:void(0)" class="btn btn_2">ROLL NO : G23AI2028</a>
          </aside>
        </article>
        <aside class="social_icons flex">
          <a href="javascript:void(0)"><i class="fa fa-facebook"></i></a>
          <a href="javascript:void(0)"><i class="fa fa-instagram"></i></a>
          <a href="javascript:void(0)"><i class="fa fa-linkedin"></i></a>
        </aside>
      </header>

      <aside class="credit"><a href="https://www.figma.com/proto/Xu2qD5cVZ5j8JosNqKgT9C/Untitled?node-id=0-3&t=qXV6fMucHxAjELb6-1&scaling=scale-down-width&page-id=0%3A1" target="_blank"><iconify-icon icon="logos:figma"></iconify-icon> Proto in Figma</a>
      </aside>
    </>
  )
}

export default App
