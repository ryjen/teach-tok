import React from 'react'
import {View, FlatList, PanResponder} from 'react-native'
import {QuestionView} from '@presentation/components'
import {useNextQuestion} from '@domain/hooks'

export const TeachTokView = () => {
   const {data, isError, isLoading, next, prev} = useNextQuestion()
   const [gestureY, setGestureY] = useState(0)

   const onPan = () => {
      if (gestureY > 0) {
	next()
      } else {
	prev()
      }
      setGestureY(0)
   }

   const panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: (e, state) => Match.abs(state.dy) > 5,
      onPanResponderMove: (e, state) => setGestureY(state.dy),
      onPanResponderRelease: onPan
   })

   return (
     <View {...panResponder.panHandlers} style={{ flex: 1 }}>
        <QuestionView question={data} />
     </View>
   )
}
