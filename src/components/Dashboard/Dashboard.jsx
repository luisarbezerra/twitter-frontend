import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tweet from '../Tweet/Tweet';


const CN = 'dashboard';

import './dashboard.scss';

class Dashboard extends Component {
  componentDidMount() {
    const { getDashboardMessages } = this.props;
    getDashboardMessages();
  }

  renderProfileContent(loading, error, messages) {
    const { users, followUser, loggedUserId, following, unfollowUser } = this.props;
    if (loading) {
      return <div>Loading ...</div>;
    } else if (messages.length > 0) {
      return messages
        .sort((a, b) => a.user_id - b.user_id)
        .reverse()
        .map(message => {
          const user = users.filter(user => {
            return user.id === message.user_id;
          })[0];
          return (
            <Tweet
              key={message.id}
              user={user}
              message={message}
              followUser={followUser}
              unfollowUser={unfollowUser}
              following={following}
              loggedUserId={loggedUserId}
            />
          );
        });
    } else {
      return <div>{error || 'Um erro ocorreu!'}</div>;
    }
  }

  renderFriendsContent(loading, error, messages) {
    const { users, followUser, loggedUserId, following, unfollowUser } = this.props;
    if (loading) {
      return <div>Loading ...</div>;
    } else if (messages.length > 0) {
      return messages.map(message => {
          const user = users.filter(user => {
            return user.id === message.user_id;
          })[0];
          return (
            <Tweet
              key={message.id}
              user={user}
              message={message}
              followUser={followUser}
              unfollowUser={unfollowUser}
              following={following}
              loggedUserId={loggedUserId}
            />
          );
        });
    } else {
      return <div>{error || 'Um erro ocorreu!'}</div>;
    }
  }

  renderDashboardContent(loading, error, messages) {
    const { users, followUser, loggedUserId, following, unfollowUser } = this.props;
    if (loading) {
      return <div>Loading ...</div>;
    } else if (messages.length > 0) {
      return messages
        .sort((a, b) => a.user_id - b.user_id)
        .reverse()
        .map(message => {
          const user = users.filter(user => {
            return user.id === message.user_id;
          })[0];
          return (
            <Tweet
              key={message.id}
              user={user}
              message={message}
              followUser={followUser}
              unfollowUser={unfollowUser}
              following={following}
              loggedUserId={loggedUserId}
            />
          );
        });
    } else {
      return <div>{error || 'Um erro ocorreu!'}</div>;
    }
  }

  render() {
    const { messages, loading, error } = this.props;
    console.log(messages);
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab><h1 className="tab-title">DASHBOARD</h1></Tab>
            <Tab><h1 className="tab-title">FRIENDS</h1></Tab>
            <Tab><h1 className="tab-title">PROFILE</h1></Tab>
          </TabList>

          <TabPanel>
            <h2>{this.renderDashboardContent(loading, error, messages)}</h2>
          </TabPanel>
          <TabPanel>
            <h2>{this.renderFriendsContent(friends_loading, friends_error, friends_messages)}</h2>
          </TabPanel>
          <TabPanel>
            {/* <h2>{this.renderProfileContent(profile_loading, profile_error, profile_messages)}</h2> */}
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Dashboard;
