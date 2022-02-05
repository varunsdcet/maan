import React ,{useRef} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import Otp from '../screens/Otp';
import CreatePassword from '../screens/CreatePassword';
import PasswordUpdate from '../screens/PasswordUpdate';
import Ragister from '../screens/Ragister';
import Otp2 from '../screens/Otp2';
import CreateProfile from '../screens/CreateProfile';
import ProfileCreated from '../screens/ProfileCreated';
import Home from '../screens/Home';
import ActiveBooks from '../screens/ActiveBooks';
import ExploreBooks from '../screens/ExploreBooks';
import Search from '../screens/Search';
import MyAccount from '../screens/MyAccount';
import TabNavigator from './TabNavigator';
import OnlineSupport from '../screens/OnlineSupport';
import ScanCode from '../screens/ScanCode';
import OnlinePopup from '../screens/OnlinePopup';
import BookDetails from '../screens/BookDetails';
import Accountancy from '../screens/Accountancy';
import AccountTopic from '../screens/AccountTopic';
import AccountSubTopic from '../screens/AccountSubTopic';
import Study from '../screens/Study';
import SelectSubject from '../screens/SelectSubject';
import Chapter from '../screens/Chapter';
import Study2 from '../screens/Study2';
import Instructions from '../screens/Instructions';
import ColomnMatch from '../screens/ColumnMatch';
import Result from '../screens/Result';
import EndExercise from '../screens/EndExercise';
import Instructions2 from '../screens/Instructions2';
import DragAndDrop from '../screens/DragAndDrop';
import Community from '../screens/Community';
import Discussion from '../screens/Discussion';
import DiscussionForum from '../screens/DiscussionForum';
import Chat from '../screens/Chat';
import Notification from '../screens/Notification';
import Updates from '../screens/Updates';
import Article from '../screens/Article';
import Webinars from '../screens/Webinars';
import WebinarDetails from '../screens/WebinarDetails';
import ExploreDetails from '../screens/ExporeDetails';
import MiniApps from '../screens/MiniApps';
import TestDetails from '../screens/TestDetails';
import Lesson from '../screens/Lesson';
import Lesson1 from '../screens/Lesson1';
import VideoLecture from '../screens/VideoLecture';
import ProfileDetails from '../screens/ProfileDetails';
import ActivePlan from '../screens/ActivePlan';
import Bookmarks from '../screens/Bookmarks';
import Filter from '../screens/Filter';
import TestInstructions from '../screens/TestInstructions';
import Question from '../screens/Question';
import Question2 from '../screens/Question2';
import EndTest from '../screens/EndTest';
import TestSummary from '../screens/TestSummary';
import Solutions from '../screens/Solutions';
import Subscription from '../screens/Subscription';
import FlashCards from '../screens/FlashCards';
import Flash from '../screens/Flash';
import TeacherRagister from '../screens/TeacherRagister';
import TeacherOtp from '../screens/TeacherOtp';
const Stack = createStackNavigator();
const StackNavigator = () => {
  const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const screenOptionStyle = {
  // headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};
    const navigationRef = useRef();
  return (
   <NavigationContainer ref={navigationRef}>
   <Stack.Navigator
      // initialRouteName={'Store'}
       screenOptions={screenOptionStyle}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreatePassword"
          component={CreatePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PasswordUpdate"
          component={PasswordUpdate}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Ragister"
          component={Ragister}
          options={{headerShown: false,cardStyleInterpolator: forFade}}
        />
        <Stack.Screen
          name="Otp2"
          component={Otp2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateProfile"
          component={CreateProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileCreated"
          component={ProfileCreated}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ActiveBooks"
          component={ActiveBooks}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ExploreBooks"
          component={ExploreBooks}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyAccount"
          component={MyAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          gestureDirection = "flip"
          options={{headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid}}
        />
        <Stack.Screen
          name="OnlineSupport"
          component={OnlineSupport}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScanCode"
          component={ScanCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnlinePopup"
          component={OnlinePopup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookDetails"
          component={BookDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Accountancy"
          component={Accountancy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountTopic"
          component={AccountTopic}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountSubTopic"
          component={AccountSubTopic}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Study"
          component={Study}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectSubject"
          component={SelectSubject}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chapter"
          component={Chapter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Study2"
          component={Study2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Instructions"
          component={Instructions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ColomnMatch"
          component={ColomnMatch}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EndExercise"
          component={EndExercise}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Instructions2"
          component={Instructions2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DragAndDrop"
          component={DragAndDrop}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Community"
          component={Community}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Discussion"
          component={Discussion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DiscussionForum"
          component={DiscussionForum}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Updates"
          component={Updates}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Webinars"
          component={Webinars}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WebinarDetails"
          component={WebinarDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ExploreDetails"
          component={ExploreDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MiniApps"
          component={MiniApps}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TestDetails"
          component={TestDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Lesson"
          component={Lesson}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Lesson1"
          component={Lesson1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VideoLecture"
          component={VideoLecture}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileDetails"
          component={ProfileDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ActivePlan"
          component={ActivePlan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bookmarks"
          component={Bookmarks}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TestInstructions"
          component={TestInstructions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Question"
          component={Question}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Question2"
          component={Question2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EndTest"
          component={EndTest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TestSummary"
          component={TestSummary}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Solutions"
          component={Solutions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Subscription"
          component={Subscription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FlashCards"
          component={FlashCards}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Flash"
          component={Flash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TeacherRagister"
          component={TeacherRagister}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TeacherOtp"
          component={TeacherOtp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
