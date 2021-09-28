import { useState, useEffect } from 'react'
import '../../style/global.css'
import '../../style/member.css'
import '../../style/memberRecipeComment.css'
import MinorBar from './component/MinorBar'
import MemberRecipeCommentRow from './component/MemberRecipeCommentRow'
import DropDown from '../../component/DropDown'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import avatar from '../../images/Avatar.png'
import axios from 'axios'
import { API_URL } from '../../utils/config'

// testJson
import food from '../../images/default_food2.jpg'
import recipePic from '../../images/member-recipe-comment-ellipse-342.png'

function MemberRecipeComment() {
  const [recipeDataList, setRecipeDataList] = useState([])

  // 檢視整個表格時，基本所需的資料
  // const testJson = {
  //   id: 54,
  //   member_id: 37,
  //   // member_avatar: avatar,
  //   // member_name: 'volunteer',
  //   // member_star_rate: 4,
  //   // member_like: true,
  //   // member_save: true,
  //   comment:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus obcaecati, delectus ducimus nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
  //   comment_time: '2021/09/18',

  //   recipe_id: 120,
  //   recipe_img: food,
  //   recipe_name: '麻油蝦',
  //   recipe_star_rate: 3.4,
  //   // recipe_author_avatar: avatar,
  //   // recipe_like: 523,
  //   // recipe_view: 1648,
  // }

  // 開啟 EditModal 時，所需的資料
  // 缺少的更詳細資料，等使用者開啟 Modal 時再發 axios post request 到後端撈資料
  // const testJson_EditModal = {
  //   id: 54,
  //   member_id: 37,
  //   member_avatar: avatar,
  //   member_name: 'volunteer',
  //   member_star_rate: 4,
  //   member_like: true,
  //   member_save: true,
  //   comment:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus obcaecati, delectus ducimus nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
  //   comment_time: '2021/09/18',

  //   recipe_id: 120,
  //   recipe_img: recipePic,
  //   recipe_name: '麻油蝦',
  //   recipe_star_rate: 3.4,
  //   recipe_author_avatar: avatar,
  //   recipe_like: 523,
  //   recipe_view: 1648,
  // }

  const dataForMap = [
    {
      id: 51,
      member_id: 39,
      comment:
        'ALorem ipsum dolo ducimus nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
      comment_time: '2021/06/18',
      recipe_id: 120,
      recipe_img: food,
      recipe_name: '麻油雞',
      recipe_star_rate: 2.7,
    },
    {
      id: 52,
      member_id: 45,
      comment:
        'BLsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus obcaecati, delectus dserunt aspossimus laboriosam magnam ullam fuga',
      comment_time: '2021/05/10',
      recipe_id: 120,
      recipe_img: food,
      recipe_name: '麻油松阪豬',
      recipe_star_rate: 3.6,
    },
    {
      id: 53,
      member_id: 3,
      comment:
        'CLorem s labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
      comment_time: '2021/09/08',
      recipe_id: 120,
      recipe_img: food,
      recipe_name: '麻油蝦',
      recipe_star_rate: 3.4,
    },
    {
      id: 54,
      member_id: 7,
      comment:
        'XLorem ipcimus nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut,imus laboriosam magnam ullam fuga',
      comment_time: '2021/12/28',
      recipe_id: 120,
      recipe_img: food,
      recipe_name: '鹹酥蝦',
      recipe_star_rate: 4.1,
    },
    {
      id: 55,
      member_id: 34,
      comment:
        'YLoloimus nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
      comment_time: '2021/04/03',
      recipe_id: 120,
      recipe_img: food,
      recipe_name: '橄欖油蝦排',
      recipe_star_rate: 3.9,
    },
    {
      id: 56,
      member_id: 12,
      comment:
        'Zonsectetur adipisicing elit. Quis molestias temporibus obcaecati, delectus ducimus nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
      comment_time: '2021/09/18',
      recipe_id: 120,
      recipe_img: food,
      recipe_name: '南瓜蒸小排',
      recipe_star_rate: 4.4,
    },
  ]

  useEffect(() => {
    const getComment = async () => {
      try {
        let response = await axios.post(
          `${API_URL}/member/recipecomment/read`,
          {},
          {
            // 設定可以跨源送 cookie
            withCredentials: true,
          }
        )
        console.log(response.data)
        setRecipeDataList(response.data)
      } catch (err) {
        console.error(err.response)
      }
    }
    getComment()
    // setRecipeDataList(dataForMap)
  }, [])

  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="memberRecipeComment-container">
          <div className="memberRecipeComment-filter">{/* <DropDown /> */}</div>
          <div className="memberRecipeComment-table">
            <div className="memberRecipeComment-table-title row align-items-center">
              <p className="font-700L col-2">食譜名稱</p>
              <p className="font-700L col-2">評分</p>
              <p className="font-700L col-6">我的評論內容</p>
            </div>
            {recipeDataList.map((value, index) => {
              return (
                <MemberRecipeCommentRow key={value.id} recipeData={value} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberRecipeComment
