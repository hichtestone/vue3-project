<template>
  <Breadcrumbs main="Email" title="Email Application" />

  <div class="container-fluid">
    <div class="email-wrap">
      <div class="row">
        <sidePage />
        <div class="col-xl-9 col-md-12 xl-70 box-col-12">
          <div class="email-right-aside">
            <div class="card email-body">
              <div class="email-profile">
                <div class="email-right-aside">
                  <div class="email-body">
                    <div class="email-content">
                      <div class="email-top">
                        <div class="row">
                          <div class="col-xl-12">
                            <div class="d-flex"><img class="me-3 rounded-circle" src="@/assets/images/user/user.png"
                                alt="">
                              <div class="flex-grow-1">
                                <h6 class="d-block">John Deo</h6>
                                <p>Inquiry about our theme pages design.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="email-wrapper">
                        <div class="emailread-group">
                          <div class="read-group">
                            <p>Hello</p>
                            <p>Dear Sir Good Morning,</p>
                          </div>
                          <div class="read-group">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat mi quis pretium semper. Proin luctus orci ac neque venenatis, quis commodo dolor posuere. Curabitur dignissim sapien quis cursus egestas. Donec blandit auctor arcu, nec pellentesque eros molestie eget. In consectetur aliquam hendrerit. Sed cursus mauris vitae ligula pellentesque, non pellentesque urna aliquet. Fusce placerat mauris enim, nec rutrum purus semper vel. Praesent tincidunt neque eu pellentesque pharetra. Fusce pellentesque est orci.</p>
                            <p class="m-t-10">Integer sodales tincidunt tristique. Sed a metus posuere, adipiscing nunc et, viverra odio. Donec auctor molestie sem, sit amet tristique lectus hendrerit sed. Cras sodales nisl sed orci mattis iaculis. Nunc eget dolor accumsan, pharetra risus a, vestibulum mauris. Nunc vulputate lobortis mollis. Vivamus nec tellus faucibus, tempor magna nec, facilisis felis. Donec commodo enim a vehicula pellentesque. Nullam vehicula vestibulum est vel ultricies.</p>
                          </div>
                        </div>
                        <div class="emailread-group">
                          <h6 class="text-muted mb-0"><i class="icofont icofont-clip"></i> ATTACHMENTS</h6><a
                            class="text-muted text-end right-download font-primary f-w-600" href="javascript:void(0)"><i
                              class="fa fa-long-arrow-down me-2"></i>Download All</a>
                          <div class="clearfix"></div>
                          <div class="attachment">
                            <ul>
                              <li><img class="img-fluid" src="@/assets/images/email/1.jpg" alt=""></li>
                              <li><img class="img-fluid" src="@/assets/images/email/2.jpg" alt=""></li>
                              <li><img class="img-fluid" src="@/assets/images/email/3.jpg" alt=""></li>
                            </ul>
                          </div>
                        </div>
                        <div class="emailread-group">
                          <textarea class="form-control" rows="4" cols="50"
                            placeholder="write about your nots"></textarea>
                          <div class="action-wrapper">
                            <ul class="actions">
                              <li><a class="btn btn-primary" href="javascript:void(0)"><i
                                    class="fa fa-reply me-2"></i>Reply</a></li>
                              <li><a class="btn btn-secondary" href="javascript:void(0)"><i
                                    class="fa fa-reply-all me-2"></i>Reply All</a></li>
                              <li><a class="btn btn-danger" href="javascript:void(0)"><i
                                    class="fa fa-share me-2"></i>Forward</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sidePage from '../sidePage'
export default {
  name: 'readMail',
  components: {
    sidePage
  }
}
</script>
