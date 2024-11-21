import { Button, View } from "react-native";
import {fetch} from "expo/fetch";

export default function Index() {

  const send =  async ({
    presignedPost,
    file,
  }: { presignedPost: any; file: { name: string; type: string; uri: string } }) => {
    try {

      const body = new FormData()
      for (const [field, value] of Object.entries(presignedPost.fields)) {
        body.append(field, value as string)
      }
      body.append("file", file as any)

      const params = {
        method: "POST",
        body,
      }

      return await fetch(presignedPost.url, params)
    } catch(e) {
      console.error(e)
    }
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={() => send({presignedPost:{url:"https://google.com", fields: {}}, file:{ name:"filea", type:'txt', uri:"https://google.fr"}})} title="Fetch"/>
    </View>
  );
}
