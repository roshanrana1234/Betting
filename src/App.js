import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddAccount from './Component/AddAccount'
import BetHistory from './Component/BetHistory'
import CasinoDeatil from './Component/CasinoDeatil'
import CasinoProfitAndLoss from './Component/CasinoProfitAndLoss'
import ChangePassword from './Component/ChangePassword'
import Dashboard from './Component/Dashboard'
import Home from './Component/Home'
import LenaDena from './Component/LenaDena'
import ListOfClient from './Component/ListOfClient'
import LiveCasino from './Component/LiveCasino'
import Login from './Component/Login'
import MarketAnalysis from './Component/MarketAnalysis'
import ProfitAndLoss from './Component/ProfitAndLoss'
import SettlementList from './Component/SettlementList'
import VirtualCasino from './Component/VirtualCasino'
import './App.css'
import CurrentBets from './Component/CurrentBets'
import AccountStatment from './Component/AccountStatment'
import CasinoReportResult from './Component/CasinoReportResult'

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route exact path='/' element={<Home />} />

        <Route exact path='dashboard' element={<Dashboard />} >
          <Route exact path='listofclient' element={<ListOfClient />} />
          <Route exact path='marketanalysis' element={<MarketAnalysis />} />
          <Route exact path='livecasino' element={<LiveCasino />} />
          <Route exact path='virtualcasino' element={<VirtualCasino />} />
          <Route exact path='addaccount' element={<AddAccount />} />
          <Route exact path='accountstatment' element={<AccountStatment />} />
          <Route exact path='settlementlist' element={<SettlementList />} />
          <Route exact path='currentbet' element={<CurrentBets />} />
          <Route exact path='profitandloss' element={<ProfitAndLoss />} />
          <Route exact path='casinoprofitandloss' element={<CasinoProfitAndLoss />} />
          <Route exact path='casinoreportresult' element={<CasinoReportResult />} />
          <Route exact path='casinodetail' element={<CasinoDeatil />} />
          <Route exact path='bethistory' element={<BetHistory />} />
          <Route exact path='lenadena' element={<LenaDena />} />
          <Route exact path='changepassword' element={<ChangePassword />} />
        </Route>

      </Routes>
    </>
  )
}

export default App