import React, { useState } from 'react'

//importing css
import './header.css'

//importing date range
import { DateRange } from 'react-date-range';

import { format } from "date-fns"

//importing icons
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

//importing multiselect
import Multiselect from 'multiselect-react-dropdown';

//importing states data 
import { states } from '../../data';

//importing css for range date ui
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Header() {
  const [openDate, setOpenDate] = useState(false)


  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [myStates,setStates]=useState([])
  const handleState=(stateNo)=>{
      console.log(stateNo)
      switch(stateNo){
         case 2:
          setStates(states.usa)
          break
         case 5:
          setStates(states.canada)
          break
         case 1:
          setStates(states.india)
          break
         default:
          setStates([])

      }
      console.log(myStates)
        
  }
  return (
    <div className='header'>
      <div className='inputContainer'>
        <input className='item-1 inputBox' placeholder='Single Keyword or RFP ID' type='text'></input>

        <select className='item-2 inputBox' id='type' name='type'>
          <option value="- Response Submission Type -">- Response Submission Type -</option>
          <option value="Digital RFP Submission">Digital RFP Submission</option>
          <option value="Physical RFP Submission">Physical RFP Submission</option>
          <option value="Both (Physical or Digital)">Both (Physical or Digital)</option>
        </select>

        <select onChange={(e)=>handleState(e.target.value)} className='item-3 inputBox' id="country" name="country">
          <option value="0">- Select Country -</option>
          <option value='2'>USA</option>
          <option value='5'>Canada</option>
          <option value='1'>India</option>
          <option value='48'>Afghanistan</option>
          <option value='60'>Albania</option>
          <option value='72'>Algeria</option>
          <option value='73'>Andorra</option>
          <option value='74'>Angola</option>
          <option value='75'>Antigua and Barbuda</option>
          <option value='76'>Argentina</option>
          <option value='77'>Armenia</option>
          <option value='6'>Australia</option>
          <option value='36'>Austria</option>
          <option value='78'>Azerbaijan</option>
          <option value='79'>Bahamas</option>
          <option value='61'>Bahrain</option>
          <option value='65'>Bangladesh</option>
          <option value='11'>Barbados</option>
          <option value='80'>Belarus</option>
          <option value='81'>Belgium</option>
          <option value='82'>Belize</option>
          <option value='83'>Benin</option>
          <option value='84'>Bhutan</option>
          <option value='85'>Bolivia</option>
          <option value='59'>Bosnia and Herzegovina</option>
          <option value='86'>Botswana</option>
          <option value='31'>Brazil</option>
          <option value='41'>Brunei </option>
          <option value='87'>Bulgaria</option>
          <option value='88'>Burkina Faso</option>
          <option value='89'>Burundi</option>
          <option value='90'>Cabo Verde</option>
          <option value='18'>Cambodia</option>
          <option value='91'>Cameroon</option>
          <option value='92'>Central African Republic</option>
          <option value='93'>Chad</option>
          <option value='94'>Chile</option>
          <option value='66'>China</option>
          <option value='95'>Colombia</option>
          <option value='96'>Comoros</option>
          <option value='97'>Congo, Democratic Republic of </option>
          <option value='198'>Congo, Republic of the</option>
          <option value='98'>Costa Rica</option>
          <option value='100'>Cote d'Ivoire</option>
          <option value='37'>Croatia</option>
          <option value='99'>Cuba</option>
          <option value='26'>Cyprus </option>
          <option value='101'>Czech Republic</option>
          <option value='10'>Denmark</option>
          <option value='102'>Djibouti</option>
          <option value='103'>Dominica</option>
          <option value='104'>Dominican Republic</option>
          <option value='105'>Ecuador</option>
          <option value='57'>Egypt</option>
          <option value='106'>El Salvador</option>
          <option value='107'>Equatorial Guinea</option>
          <option value='108'>Eritrea</option>
          <option value='109'>Estonia</option>
          <option value='40'>Ethiopia</option>
          <option value='17'>Fiji</option>
          <option value='30'>Finland</option>
          <option value='12'>France</option>
          <option value='110'>Gabon</option>
          <option value='111'>Gambia</option>
          <option value='197'>Georgia</option>
          <option value='27'>Germany</option>
          <option value='112'>Ghana</option>
          <option value='113'>Greece</option>
          <option value='114'>Grenada</option>
          <option value='115'>Guatemala</option>
          <option value='116'>Guinea</option>
          <option value='117'>Guinea-Bissau</option>
          <option value='118'>Guyana</option>
          <option value='119'>Haiti</option>
          <option value='67'>Honduras</option>
          <option value='23'>Hungary</option>
          <option value='120'>Iceland</option>
          <option value='29'>Indonesia</option>
          <option value='121'>Iran</option>
          <option value='52'>Iraq</option>
          <option value='7'>Ireland</option>
          <option value='122'>Israel</option>
          <option value='49'>Italy</option>
          <option value='123'>Jamaica</option>
          <option value='32'>Japan</option>
          <option value='42'>Jordan</option>
          <option value='124'>Kazakhstan</option>
          <option value='21'>Kenya</option>
          <option value='125'>Kiribati</option>
          <option value='28'>Kosovo</option>
          <option value='126'>Kuwait</option>
          <option value='127'>Kyrgyzstan</option>
          <option value='128'>Laos</option>
          <option value='129'>Latvia</option>
          <option value='33'>Lebanon</option>
          <option value='130'>Lesotho</option>
          <option value='131'>Liberia</option>
          <option value='47'>Libya </option>
          <option value='132'>Liechtenstein</option>
          <option value='133'>Lithuania</option>
          <option value='134'>Luxembourg</option>
          <option value='69'>Macedonia</option>
          <option value='135'>Madagascar</option>
          <option value='136'>Malawi</option>
          <option value='137'>Malaysia</option>
          <option value='138'>Maldives</option>
          <option value='139'>Mali</option>
          <option value='140'>Malta</option>
          <option value='141'>Marshall Islands</option>
          <option value='54'>Mauritania</option>
          <option value='142'>Mauritius</option>
          <option value='143'>Mexico</option>
          <option value='144'>Micronesia</option>
          <option value='145'>Moldova</option>
          <option value='146'>Monaco</option>
          <option value='15'>Mongolia</option>
          <option value='147'>Montenegro</option>
          <option value='43'>Morocco</option>
          <option value='148'>Mozambique</option>
          <option value='34'>Myanmar (Burma)</option>
          <option value='149'>Namibia</option>
          <option value='150'>Nauru</option>
          <option value='44'>Nepal</option>
          <option value='58'>Netherlands</option>
          <option value='8'>New Zealand</option>
          <option value='151'>Nicaragua</option>
          <option value='152'>Niger</option>
          <option value='62'>Nigeria</option>
          <option value='153'>North Korea</option>
          <option value='154'>Norway</option>
          <option value='155'>Oman</option>
          <option value='156'>Pakistan</option>
          <option value='157'>Palau</option>
          <option value='158'>Palestine</option>
          <option value='56'>Panama</option>
          <option value='159'>Papua New Guinea</option>
          <option value='160'>Paraguay</option>
          <option value='35'>Peru</option>
          <option value='64'>Philippines</option>
          <option value='161'>Poland</option>
          <option value='162'>Portugal</option>
          <option value='163'>Qatar</option>
          <option value='164'>Romania</option>
          <option value='165'>Russia</option>
          <option value='166'>Rwanda</option>
          <option value='170'>Samoa</option>
          <option value='171'>San Marino</option>
          <option value='172'>Sao Tome and Principe</option>
          <option value='71'>Saudi Arabia</option>
          <option value='53'>Senegal</option>
          <option value='173'>Serbia</option>
          <option value='174'>Seychelles</option>
          <option value='175'>Sierra Leone</option>
          <option value='176'>Singapore</option>
          <option value='177'>Slovakia</option>
          <option value='178'>Slovenia</option>
          <option value='179'>Solomon Islands</option>
          <option value='63'>Somalia</option>
          <option value='180'>South Africa</option>
          <option value='181'>South Korea</option>
          <option value='182'>South Sudan</option>
          <option value='14'>Spain</option>
          <option value='68'>Sri Lanka</option>
          <option value='167'>St. Kitts and Nevis</option>
          <option value='168'>St. Lucia</option>
          <option value='169'>St. Vincent and The Grenadines</option>
          <option value='70'>Sudan </option>
          <option value='183'>Suriname</option>
          <option value='184'>Swaziland</option>
          <option value='13'>Sweden</option>
          <option value='9'>Switzerland</option>
          <option value='185'>Syria</option>
          <option value='186'>Taiwan</option>
          <option value='50'>Tajikistan</option>
          <option value='38'>Tanzania</option>
          <option value='24'>Thailand</option>
          <option value='39'>Timor Leste </option>
          <option value='187'>Togo</option>
          <option value='188'>Tonga</option>
          <option value='22'>Trinidad and Tobago</option>
          <option value='45'>Tunisia</option>
          <option value='20'>Turkey</option>
          <option value='189'>Turkmenistan</option>
          <option value='190'>Tuvalu</option>
          <option value='25'>Uganda</option>
          <option value='4'>UK (United Kingdom)</option>
          <option value='19'>Ukraine</option>
          <option value='191'>United Arab Emirates</option>
          <option value='192'>Uruguay</option>
          <option value='46'>Uzbekistan</option>
          <option value='193'>Vanuatu</option>
          <option value='194'>Vatican City</option>
          <option value='195'>Venezuela</option>
          <option value='16'>Vietnam</option>
          <option value='55'>Yemen</option>
          <option value='196'>Zambia</option>
          <option value='51'>Zimbabwe</option>
      </select>

      <select className='item-4 inputBox' id='state' name='state'>
        <option value="0">- Select State -</option>
        {
          (myStates.length===0)?(<option disabled>No States</option>):(
            myStates.map((state)=>(
              <option value={state}>state</option>
            ))
          )
        }
        
      </select>

      <select className='item-5 inputBox' id='status' name='status'>
        <option value="- RFP Status -">- RFP Status -</option>
        <option value="Active">Active</option>
        <option value="Expired">Expired</option>
        <option value="All">All</option>
      </select>

      <div className='item-6 inputDateBox'>
        <CalendarTodayIcon style={{ color: "gray" }}></CalendarTodayIcon>
        <span onClick={() => setOpenDate(!openDate)} className='inputBoxText'>{`${format(date[0].startDate, "MM/dd/yy")} to ${format(date[0].endDate, "MM/dd/yy")}`}</span>

        {
          openDate &&

          <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'
            minDate={new Date()}
          />
        }
      </div>

      <div className='item-7 multyInput'>
      <Multiselect
      className='multyselect'
       isObject={false}
       onKeyPressFn={function noRefCheck(){}}
       onRemove={function noRefCheck(){}}
       onSearch={function noRefCheck(){}}
       onSelect={function noRefCheck(){}}
       options={[
         'Web Design and Development',
         'Mobile Application Development',
         'Call Center and Answering',
         'Data Entry, Scanning, Records and Document Related Services',
         'Medical Transcription and Others',
         'Artificial Intelligence and Machine Learning',
         'Document Printing and Mailing, Books, Maps, Ballot Papers, or Other Publications',
         'Software, System and Application',
         'Medical Billing and Coding',
         'Translation and Interpretation',
         'Court Reporting',
         'CAD/CAM Drafting',
         'Graphics and Animation',
         'Auditing, Finance and Accounting',
         'Social Media, Internet Marketing and SEO',
         'Billing Services',
         'Global , Remote , Offshore',
         'Marketing and Branding',
         'Writing Services',
         'HR Services',
         'Recycling Services',
         'Asset Management',
         'Destruction Services',
         'GIS Services',
         'CCTV and Security Services and Supplies',
         'Networking Services and Supplies',
         'Debt Collection Services',
         'Computer Supplies, Accessories and other Equipments',
         'Medical and Surgical Supplies',
         'Medical Services',
         'Legal Services',
         'Electron Microscope',
         'Professional, Consulting, Administrative or Management Support Services',
         'Case Management Services',
         'Records Storage Services',
         'IT Services (Computer Maintenance and Technical Services)',
         'Data Research and Analytics',
         'Staffing Services',
         'Live Animals, Poultry, Food, Beverage, Catering Services and Supplies, Vending Machines',
         'Transportation Services',
         'Rental Services',
         'Cleaning, Janitorial and Custodial Services and Supplies',
         'Stationery, Office Supplies, Machines, Components, Accessories, Equipments or Related Services',
         'Real Estate, Brokerage Services, Maintenance, Repair and Alteration of Property',
         'Waste Disposal Services',
         'Health and Related Services',
         'Painting Services and Supplies',
         'Banking Services',
         'Plumbing Services and Supplies',
         'Pharmaceutical, Pharmacy & Related Services',
         'Weapons, Nuclear Ordnance, Ammunition, Explosives or Guided Missiles',
         'Plane and Aircraft Services, Supplies, Components, Accessories or Related Equipments',
         'Railway Services and Supplies, Components, Accessories or Related Equipments',
         'Space Vehicle Services, Supplies, Components, Accessories or Related Equipments',
         'Ship and Marine Services, Supplies, Components, Accessories or Related Equipments',
         'Ground Vehicles Services, Supplies, Components, Accessories or Related Equipments',
         'Other Vehicles Services, Supplies, Components, Accessories or Related Equipments',
         'Other Special Industry Machinery, Components, Accessories or Related Equipments',
         'Fire Control, Firefighting, Rescue Safety Services, Supplies, Components, Accessories or Related Equipments',
         'Farming and Agricultural Services, Supplies, Components, Accessories or Related Equipments',
         'Electrical and Electronic Services, Supplies, Components, Accessories or Related Equipments',
         'Wooden and Other Furniture Services, Supplies, Components, Accessories or Related Equipments',
         'Service and Trade Equipments',
         'Water Purification and Sewage Services, Supplies, Components, Accessories or Related Equipments',
         'Telecommunication Services, Supplies, Components, Accessories or Related Equipments',
         'Air-conditioning, Refrigeration Services, Supplies, Components, Accessories or Related Equipments',
         'Music, Movies, Photographic Services, Supplies, Components, Accessories or Related Equipments',
         'Ores, Mines, Minerals and Their Primary Products or Services',
         'Natural Resources and Conservation Services',
         'Non-Metallic Fabricated Materials, Crude Materials, Metal Bars, Sheets and Shapes Supplies',
         'Social Services',
         'Quality control, Testing & Inspection services',
         'Clothing, Textiles, Leather, Furs, Apparel, Shoe, Tents, Flags Supplies',
         'Fuels, Lubricants, Oils, Waxes Supplies, Components, Accessories or Related Equipments',
         'Utilities and Housekeeping Services',
        'Subsistence, Education or Training Supplies and Services',
         'Sports, Recreational, Athletic Supplies, Components, Accessories, Equipments, or Related Services',
         'Toilet, Toiletries Services, Supplies, Components, Accessories or Related Equipments',
         'Background Check, Screening or Investigation Services',
         'Construction, Architecture, Interior Design, Landscaping and Other Related Services',
         'Travel Agency or Support Services',
         'Uncategorized',
         'Insurance Services',
         'US Federal'

       ]}
       placeholder='Type Category'
       style={{
        searchBox:{
          'border':'none',
          'border-radius':'0px',
        }
       }

       }
/>
      </div>
      <div className='item-8'>
        <span className='SampleInfoText'>Govt.Agencies</span>
      </div>
      <div className='item-9 SampleCheckBox'>
        <input type='checkbox'></input>
        <span className='CheckBoxText'>US Federal</span>
      </div>
      <div className='item-10 SampleCheckBox'>
        <input type='checkbox' checked></input>
        <span className='CheckBoxText'>Excepet Us Federal</span>
      </div>
      <div className='item-11'>
        <button className='SearchClearBtn' type='reset'>RESET</button>
      </div>
      <div className='item-12'>
        <button className='SearchBtn' type='submit'>SEARCH NOW</button>
      </div>
    </div>
    </div>

  )
}
