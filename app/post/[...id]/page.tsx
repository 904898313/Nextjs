

/*
 * @Author: yangchenguang
 * @Description: 
 * @Date: 2023-12-05 17:07:10
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-12-05 17:13:11
 */

export default function Post({ params }: { params: { id: string } }) {
	console.log(params,"params");
  return (
    <div>
			hello post params: { params.id }
    </div>
  )
}
