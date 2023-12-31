import React, { useContext } from 'react'
import './Rightbar.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../lib/firebase'

import aktilek from '../../assets/users/aktilek.jpg'
import asan from '../../assets/users/asan.png'
import ayana from '../../assets/users/ayana.jpg'
import ayelita from '../../assets/users/ayelita.jpg'
import altynai from '../../assets/users/altynai.jpg'
import anon from '../../assets/users/anon.webp'
import { GlobalContext } from '../../state/context/GlobalContext'

const USERS = [
  {
    name: 'aktilek',
    sub: 'New user Instagram',
    image: aktilek
  },
  {
    name: 'altynai',
    sub: 'Your subscriber',
    image: altynai
  },
  {
    name: 'ayana',
    sub: 'Followed by who',
    image: ayana
  },
  {
    name: 'asan',
    sub: 'Your subscriber',
    image: asan
  },
  {
    name: 'ayelita',
    sub: 'New user Instagram',
    image: ayelita
  },
]

const Rightbar = () => {
  const handleLogout = async () => {
    await signOut(auth)
    window.location.reload()
  }

  const { user, showRightbar } = useContext(GlobalContext)

  return (
    <>
      {!showRightbar ?
        <div className='rightbar'>
          <div className="container" >
            <div className="rightbar__body">
              <div className="rightbar__header">
                <div className="rightbar__person">
                  <img src={anon} alt="" />
                  <div className="rightbar__name">
                    <span style={{ fontWeight: '500' }}>{user.username}</span>
                    <span style={{ color: 'gray' }}>{user.fullname}</span>
                  </div>
                </div>
                <span className='blue' onClick={handleLogout}>Switch</span>
              </div>
              <div className="rightbar__recom">
                <div className="recom__me">
                  <span style={{ color: 'gray' }}>Recommendations for you</span>
                  <span style={{ fontSize: '13px' }}>Все</span>
                </div>
                <div className="recom__users">
                  {USERS.map((el, i) => {
                    return (
                      <div key={i} className="recom__user">
                        <img src={el.image} alt="" />
                        <div className="user__info">
                          <span style={{ fontWeight: '500' }}>{el.name}</span>
                          <span style={{ color: 'gray' }} className='sub'>{el.sub}</span>
                        </div>
                        <span className='blue'>Subscribe</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="rightbar__footer">
                <span>
                Information.
                  Help .
                  Press.
                  API.
                  Vacancies.
                  Privacy.
                  Conditions .
                  Places
                  Language .
                  Meta Verified
                </span>

                <div>
                  © 2023 INSTAGRAM - CLONE BY MAHI
                </div>
              </div>
            </div>
          </div >
        </div > : null
        }
    </>
  )
}

export default Rightbar