import app from '../../app';
import request from 'supertest';
/*global describe,it*/
describe('get /cakes', ()=> {
  it('should return  cake arr', (done)=> {
    request(app)
        .get('/cakes?_=' + Math.random())
        .expect([
          {
            '_id': '57b294a280a821c918823b7b',
            'name': 'Tiramisu',
            'intro': '瑞士防潮糖粉、新西兰安佳奶油芝士、美雅士朗姆酒、奥利奥坚果底坯',
            'style': '提拉米苏',
            'image': 'image/cakelist/01.jpg',
            '__v': 0
          },
          {
            '_id': '57b294a280a821c918823b78',
            'name': 'Natural Yogurt Mousse Cake',
            'intro': '澳洲Binder Vally缤堡谷的“缤酸奶”、纯鲜时令水果',
            'style': '缤果雪慕',
            'image': 'image/cakelist/02.jpg',
            '__v': 0
          },
          {
            '_id': '57b294a280a821c918823b7c',
            'name': 'Rainbow Paris',
            'intro': '美国大杏仁片、法国铁塔淡奶油、时令鲜水果',
            'style': '彩虹巴黎',
            'image': 'image/cakelist/03.jpg',
            '__v': 0
          },
          {
            '_id': '57b294a280a821c918823b79',
            'name': 'Mango Mousse',
            'intro': '纯鲜芒果、法国宝茸顶级芒果果蓉、法国铁塔淡奶油',
            'style': '芒果慕斯',
            'image': 'image/cakelist/04.jpg',
            '__v': 0
          },
          {
            '_id': '57b294a280a821c918823b7a',
            'name': 'Hawaii',
            'intro': '瑞士防潮糖粉、新西兰安佳奶油芝士、美雅士朗姆酒、奥利奥坚果底坯',
            'style': '夏威夷',
            'image': 'image/cakelist/05.jpg',
            '__v': 0
          },
          {
            '_id': '57b294a280a821c918823b7d',
            'name': 'Tiramisu',
            'intro': '瑞士防潮糖粉、新西兰安佳奶油芝士、美雅士朗姆酒、奥利奥坚果底坯',
            'style': '提拉米苏',
            'image': 'image/cakelist/06.jpg',
            '__v': 0
          },
          {
            '_id': '57b294a280a821c918823b7e',
            'name': 'Natural Yogurt Mousse Cake',
            'intro': '澳洲Binder Vally缤堡谷的“缤酸奶”、纯鲜时令水果',
            'style': '缤果雪慕',
            'image': 'image/cakelist/07.jpg',
            '__v': 0
          },
          {
            '_id': '57b294a280a821c918823b7f',
            'name': 'Rainbow Paris',
            'intro': '美国大杏仁片、法国铁塔淡奶油、时令鲜水果',
            'style': '彩虹巴黎',
            'image': 'image/cakelist/08.jpg',
            '__v': 0
          }
        ])
        .end((err)=> {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });

  });
});

describe('post /users', function () {
  it('should get parameter by j', (done)=> {
    request(app)
        .post('/users')
        .type('form')
        .send({
          username: 'wangting',
          password: 'wt1234'
        })
        .end((err, doc)=> {
          let result = {
            username: doc.body.username,
            password: doc.body.password
          };
          expect(result).toEqual({
            'username': 'wangting',
            'password': 'wt1234',
          });
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  });
});

describe('post /users/login', function () {
  it('should get valid input true', (done)=> {
    request(app)
        .post('/users/login')
        .type('form')
        .send({
          username: 'wangting@163.com',
          password: 'wt1234'
        })
        .end((err, doc)=> {
          expect(doc.body).toEqual(true);
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  });
  it('should get valid input false', (done)=> {
    request(app)
        .post('/users/login')
        .type('form')
        .send({
          username: 'wangting111',
          password: 'wt1234'
        })
        .end((err, doc)=> {
          expect(doc.body).toEqual(false);
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  });
});