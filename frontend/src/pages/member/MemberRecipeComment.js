import { useState } from 'react'
import '../../style/global.css'
import '../../style/member.css'
import '../../style/memberRecipeComment.css'
import MinorBar from './component/MinorBar'
import MemberRecipeCommentRow from './component/MemberRecipeCommentRow'
import DropDown from '../../component/DropDown'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import avatar from '../../images/Avatar.png'

// testJson
import food from '../../images/default_food2.jpg'
import recipePic from '../../images/member-recipe-comment-ellipse-342.png'

function MemberRecipeComment() {
  // 檢視整個表格時，基本所需的資料
  const [testJson, setTestJson] = useState({
    id: 54,
    member_id: 37,
    // member_avatar: avatar,
    // member_name: 'volunteer',
    // member_star_rate: 4,
    // member_like: true,
    // member_save: true,
    comment:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus obcaecati, delectus ducimus nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
    comment_time: '2021/09/18',

    recipe_id: 120,
    recipe_img: food,
    recipe_name: '麻油蝦',
    recipe_star_rate: 3.4,
    // recipe_author_avatar: avatar,
    // recipe_like: 523,
    // recipe_view: 1648,
  })

  // 開啟 EditModal 時，所需的資料
  // 缺少的更詳細資料，等使用者開啟 Modal 時再發 axios post request 到後端撈資料
  const [testEditModal, setTestEditModal] = useState({
    id: 54,
    member_id: 37,
    member_avatar: avatar,
    member_name: 'volunteer',
    member_star_rate: 4,
    member_like: true,
    member_save: true,
    comment:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus obcaecati, delectus ducimus nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
    comment_time: '2021/09/18',

    recipe_id: 120,
    recipe_img: recipePic,
    recipe_name: '麻油蝦',
    recipe_star_rate: 3.4,
    recipe_author_avatar: avatar,
    recipe_like: 523,
    recipe_view: 1648,
  })


  const [recipeDataList, setRecipeDataList] = useState([
    {
      id: 51,
      member_id: 37,
      private_id: 120,
      private_img: recipePic,
      private_name: '麻油蝦1',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus obcaecati, delectus ducimitecto possimus laboriosam magnam ullam fuga',
      comment_time: '2021/06/08',
      star_rate: 4.2,
    },
    {
      id: 52,
      member_id: 37,
      private_id: 120,
      private_img: recipePic,
      private_name: '麻油蝦2',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus obcaecati, delectus dures id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
      comment_time: '2021/09/18',
      star_rate: 3.4,
    },
    {
      id: 54,
      member_id: 37,
      private_id: 120,
      private_img: recipePic,
      private_name: '麻油蝦3',
      comment:
        'Lorem ipsum dolor sit as nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
      comment_time: '2021/09/03',
      star_rate: 4.1,
    },
    {
      id: 54,
      member_id: 37,
      private_id: 120,
      private_img: recipePic,
      private_name: '麻油蝦4',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus obcaecati, delectus ducimus nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
      comment_time: '2021/09/24',
      star_rate: 3.5,
    },
    {
      id: 54,
      member_id: 37,
      private_id: 120,
      private_img: recipePic,
      private_name: '麻油蝦5',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus  tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
      comment_time: '2021/09/05',
      star_rate: 4.4,
    },
    {
      id: 54,
      member_id: 37,
      private_id: 120,
      private_img: recipePic,
      private_name: '麻油蝦6',
      comment:
        'Lorem-6 ipsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus obcaecati architecto possimus laboriosam magnam ullam fuga',
      comment_time: '2021/09/16',
      star_rate: 2.6,
    },
  ])

  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="memberRecipeComment-container">
          <div className="memberRecipeComment-filter">
            <DropDown />
          </div>
          <div className="memberRecipeComment-table">
            <div className="memberRecipeComment-table-title row align-items-center">
              <p className="font-700L col-2">食譜名稱</p>
              <p className="font-700L col-2">評分</p>
              <p className="font-700L col-6">我的評論內容</p>
            </div>
            <MemberRecipeCommentRow recipeData={testJson} />
            <MemberRecipeCommentRow recipeData={testJson} />
            <MemberRecipeCommentRow recipeData={testJson} />
            <MemberRecipeCommentRow recipeData={testJson} />
            <MemberRecipeCommentRow recipeData={testJson} />

            {/* {recipeDataList.map((value, index) => {
              return <MemberRecipeCommentRow recipeData={value} />
            })} */}

            {/* {weekdata.map((value, index) => {
              return <featureWeek key={index} weekdataDetail={value}/>
            })} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberRecipeComment
