'use client'
import Navbar from '../components/navbar/page'
import useLanguage from '../utils/language'

export default function About() {
  const { english } = useLanguage()
  return (
    <>
      <Navbar english={english} />
      <h1>OIe</h1>
    </>
  )
}