class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :avatar
end
