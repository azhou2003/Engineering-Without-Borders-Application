require "rails_helper"

RSpec.describe ProjectMembersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/project_members").to route_to("project_members#index")
    end

    it "routes to #show" do
      expect(get: "/project_members/1").to route_to("project_members#show", id: "1")
    end

    it "routes to #by_project via GET" do
      expect(get: "/project_members/project/1").to route_to("project_members#by_project", project_id: "1")
    end

    it "routes to #by_member via GET" do
      expect(get: "/project_members/member/123456").to route_to("project_members#by_member", uin: "123456")
    end

    it "routes to #create" do
      expect(post: "/project_members").to route_to("project_members#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/project_members/1").to route_to("project_members#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/project_members/1").to route_to("project_members#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/project_members/1").to route_to("project_members#destroy", id: "1")
    end
  end
end
